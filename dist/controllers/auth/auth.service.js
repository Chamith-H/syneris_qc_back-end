"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../schemas/user-management/user.schema");
const generator = require("generate-password");
const argon = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const aws_s3_bucket_service_1 = require("../../config/services/aws-s3-bucket/aws-s3-bucket.service");
const email_sender_service_1 = require("../../config/services/email-sender/email-sender.service");
const cheerio = require("cheerio");
const email_template_1 = require("../../config/templates/email.template");
let AuthService = class AuthService {
    constructor(userModel, jwtService, s3BucketService, emailSenderService, emailTemplateService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
        this.s3BucketService = s3BucketService;
        this.emailSenderService = emailSenderService;
        this.emailTemplateService = emailTemplateService;
    }
    async login(dto) {
        var _a, _b;
        const user = await this.userModel.findOne({ userId: dto.username });
        if (!user) {
            throw new common_1.UnauthorizedException('Incorrect credentials!');
        }
        const pwdMatches = await argon.verify(user.password, dto.password);
        if (!pwdMatches) {
            throw new common_1.UnauthorizedException('Incorrect credentials!');
        }
        const validatedUser = await this.userModel
            .findOne({ _id: user.id })
            .populate({ path: 'role', populate: { path: 'permissions' } });
        if (!validatedUser.status ||
            !validatedUser.role.status ||
            !validatedUser.role.permissions ||
            validatedUser.role.permissions.length === 0) {
            throw new common_1.UnauthorizedException('Unauthorized access!');
        }
        const activeUser = {
            userId: validatedUser._id,
            name: validatedUser.name,
            type: validatedUser.type,
            roleId: validatedUser.role._id,
            roleName: validatedUser.role.name,
            profileImage: null,
        };
        const permissionNumbers = (_b = (_a = validatedUser.role) === null || _a === void 0 ? void 0 : _a.permissions) === null || _b === void 0 ? void 0 : _b.map((permission) => {
            return permission.permissionNo;
        });
        const payload = {
            id: user._id,
        };
        return {
            jwtToken: await this.jwtService.sign(payload),
            userData: JSON.stringify(activeUser),
            accessNumbers: JSON.stringify(permissionNumbers),
        };
    }
    async validate(payload) {
        var _a, _b;
        const user = await this.userModel
            .findOne({ _id: payload.id })
            .populate({ path: 'role', populate: { path: 'permissions' } });
        if (!user) {
            throw new common_1.UnauthorizedException('Unauthorized user!');
        }
        if (!user.status ||
            !user.role.status ||
            !user.role.permissions ||
            user.role.permissions.length === 0) {
            throw new common_1.UnauthorizedException('Unauthorized access!');
        }
        const permissionNumbers = (_b = (_a = user.role) === null || _a === void 0 ? void 0 : _a.permissions) === null || _b === void 0 ? void 0 : _b.map((permission) => {
            return permission.permissionNo;
        });
        const validatedUser = {
            userId: user._id,
            name: user.name,
            type: user.type,
            roleId: user.role._id,
            roleName: user.role.name,
            permissions: permissionNumbers,
        };
        return validatedUser;
    }
    async sendOtp(dto) {
        const user = await this.userModel
            .findOne({ officeEmail: dto.email })
            .populate({ path: 'role' });
        if (!user) {
            throw new common_1.ConflictException('No users found!');
        }
        const userProfileImage = await this.s3BucketService.getSingleFile(user.profileImage);
        const otp = await generator.generate({
            length: 6,
            numbers: true,
            symbols: false,
            uppercase: false,
            lowercase: false,
        });
        const updateOtpCode = await this.userModel.updateOne({ _id: user._id }, { $set: { resetOtp: otp } });
        if (updateOtpCode.modifiedCount !== 1) {
            throw new common_1.BadRequestException('Cannot generate OTP code!');
        }
        const tempString = await this.emailTemplateService.send_otpCode(user.name, otp);
        const $ = cheerio.load(tempString);
        const modifiedHtml = $.html();
        const emailData = {
            receiver: user.officeEmail,
            heading: 'One Time Password',
            template: modifiedHtml,
        };
        const mailStatus = await this.emailSenderService.sendEmail(emailData);
        if (!mailStatus) {
            throw new common_1.BadRequestException('Sorry, password cannot be sent to this office email!');
        }
        return {
            userId: user._id,
            userName: user.name,
            role: user.role.name,
            email: user.officeEmail,
            profileImage: userProfileImage.url,
        };
    }
    async resetPassword(dto) {
        const user = await this.userModel.findOne({ _id: dto.id });
        if (!user) {
            throw new common_1.ConflictException('User not found!');
        }
        if (user.resetOtp !== dto.otp) {
            throw new common_1.ConflictException('Invalid OTP code!');
        }
        const password = await generator.generate({
            length: 8,
            numbers: true,
        });
        const encryptedPassword = await argon.hash(password);
        const tempString = await this.emailTemplateService.send_newPassword(user.name, user.employeeId, password);
        const $ = cheerio.load(tempString);
        const modifiedHtml = $.html();
        const emailData = {
            receiver: user.officeEmail,
            heading: 'Password resetting',
            template: modifiedHtml,
        };
        const mailStatus = await this.emailSenderService.sendEmail(emailData);
        if (!mailStatus) {
            throw new common_1.BadRequestException('Sorry, password cannot be sent to this office email!');
        }
        const pwdUpdater = await this.userModel.updateOne({ _id: dto.id }, { $set: { password: encryptedPassword } });
        if (pwdUpdater.modifiedCount !== 1) {
            throw new common_1.BadRequestException('Cannot change this password!');
        }
        return {
            message: 'Password changed successfully! Your new password is sent to the E-mail',
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService,
        aws_s3_bucket_service_1.AwsS3BucketService,
        email_sender_service_1.EmailSenderService,
        email_template_1.EmailTemplateService])
], AuthService);
//# sourceMappingURL=auth.service.js.map