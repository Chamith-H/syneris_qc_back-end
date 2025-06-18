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
exports.UserService = void 0;
const email_sender_service_1 = require("./../../../config/services/email-sender/email-sender.service");
const common_1 = require("@nestjs/common");
const aws_s3_bucket_service_1 = require("../../../config/services/aws-s3-bucket/aws-s3-bucket.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../../../schemas/user-management/user.schema");
const mongoose_2 = require("mongoose");
const generator = require("generate-password");
const argon = require("argon2");
const uniqueness_checker_service_1 = require("../../../config/services/uniqueness-checker/uniqueness-checker.service");
const unique_code_generator_service_1 = require("../../../config/services/unique-code-generator/unique-code-generator.service");
const table_pagination_service_1 = require("../../../config/services/table-pagination/table-pagination.service");
const status_changer_service_1 = require("../../../config/services/status-changer/status-changer.service");
const system_log_service_1 = require("../../log-management/system-log/system-log.service");
const edit_log_service_1 = require("../../log-management/edit-log/edit-log.service");
const user_enum_1 = require("../../../config/enums/user-management/user.enum");
const edit_log_enum_1 = require("../../../config/enums/log-management/edit-log.enum");
const hidden_action_service_1 = require("../../web-socket/hidden-action/hidden-action.service");
const email_template_1 = require("../../../config/templates/email.template");
const cheerio = require("cheerio");
let UserService = class UserService {
    constructor(userModel, checkUniquenessService, uniqueCodeGenetatorService, emailSenderService, paginationService, statusChangerService, s3BucketService, hiddenActionService, systemLogService, editLogService, emailTemplateService) {
        this.userModel = userModel;
        this.checkUniquenessService = checkUniquenessService;
        this.uniqueCodeGenetatorService = uniqueCodeGenetatorService;
        this.emailSenderService = emailSenderService;
        this.paginationService = paginationService;
        this.statusChangerService = statusChangerService;
        this.s3BucketService = s3BucketService;
        this.hiddenActionService = hiddenActionService;
        this.systemLogService = systemLogService;
        this.editLogService = editLogService;
        this.emailTemplateService = emailTemplateService;
    }
    async createUser(dto, files, userId) {
        const name_checkingObject = {
            dataModel: this.userModel,
            key: 'name',
            value: dto.name,
            error: 'Name is exist!',
        };
        await this.checkUniquenessService.compare_forCREATE(name_checkingObject);
        const email_checkingObject = {
            dataModel: this.userModel,
            key: 'officeEmail',
            value: dto.officeEmail,
            error: 'E-mail is exist!',
        };
        await this.checkUniquenessService.compare_forCREATE(email_checkingObject);
        const empid_checkingObject = {
            dataModel: this.userModel,
            key: 'employeeId',
            value: dto.employeeId,
            error: 'Employee ID is exist!',
        };
        await this.checkUniquenessService.compare_forCREATE(empid_checkingObject);
        const password = await generator.generate({
            length: 8,
            numbers: true,
        });
        const encryptedPassword = await argon.hash(password);
        const tempString = await this.emailTemplateService.register_userPassword(dto.name, dto.employeeId, password);
        const $ = cheerio.load(tempString);
        const modifiedHtml = $.html();
        const emailData = {
            receiver: dto.officeEmail,
            heading: 'User account creation',
            template: modifiedHtml,
        };
        const mailStatus = await this.emailSenderService.sendEmail(emailData);
        if (!mailStatus) {
            throw new common_1.BadRequestException('Sorry, password cannot be sent to this office email!');
        }
        const uniqueCodeObject = {
            dataModel: this.userModel,
            prefix: 'USR-',
        };
        const uniqueCode = await this.uniqueCodeGenetatorService.create_newUniqueCode(uniqueCodeObject);
        const imageUrls = await this.s3BucketService.uploadFiles(files.images, `Users/${uniqueCode.requestNumber}`);
        const profileImageUrl = imageUrls[0];
        const newUser = Object.assign(Object.assign({ number: uniqueCode.requestNumber, userId: uniqueCode.requestId }, dto), { profileImage: profileImageUrl, type: user_enum_1.UserType.MOBILE_USER, resetOtp: '', password: encryptedPassword });
        const systemLog = {
            userId: userId,
            target: 'User',
            data: newUser,
            successMessage: 'User created successfully!',
            errorMessage: 'Cannot create this user!',
        };
        return await this.systemLogService.add_toSystemLog(this.userModel, systemLog);
    }
    async getUsers(dto, pagination) {
        if (dto.name) {
            const regex = new RegExp(dto.name, 'i');
            dto.name = regex;
        }
        const list = await this.userModel
            .find(dto)
            .populate({ path: 'role' })
            .skip(pagination.offset)
            .limit(pagination.limit)
            .sort({ number: -1 });
        const userData = await Promise.all(list.map(async (item) => {
            const profileImage = await this.s3BucketService.getSingleFile(item.profileImage);
            return {
                values: item,
                image: profileImage.url,
            };
        }));
        const currentPage = {
            data: userData,
            model: this.userModel,
            query: dto,
            currentPage: pagination.page,
            dataLimit: pagination.limit,
        };
        return await this.paginationService.render_toPAGE(currentPage);
    }
    async getSingleUserForView(id) {
        const isExist = await this.userModel
            .findOne({ _id: id })
            .populate({ path: 'role' });
        if (!isExist) {
            throw new common_1.ConflictException('Cannot find this user!');
        }
        const profileImage = await this.s3BucketService.getSingleFile(isExist.profileImage);
        isExist.profileImage = profileImage.url;
        return isExist;
    }
    async getSingleUserForEdit(id) {
        const isExist = await this.userModel.findOne({ _id: id });
        if (!isExist) {
            throw new common_1.ConflictException('Cannot find this user!');
        }
        const profileImage = await this.s3BucketService.getSingleFile(isExist.profileImage);
        isExist.profileImage = profileImage.url;
        return isExist;
    }
    async updateUser(id, dto, files, userId) {
        const isExist = await this.userModel.findOne({ _id: id });
        if (!isExist) {
            throw new common_1.ConflictException('Cannot find this user!');
        }
        const name_checkingObject = {
            id: id,
            dataModel: this.userModel,
            key: 'name',
            value: dto.name,
            error: "This user's name is already exist!",
        };
        await this.checkUniquenessService.compare_forUPDATE(name_checkingObject);
        const email_checkingObject = {
            id: id,
            dataModel: this.userModel,
            key: 'officeEmail',
            value: dto.officeEmail,
            error: 'This email is already exist!',
        };
        await this.checkUniquenessService.compare_forUPDATE(email_checkingObject);
        const empId_checkingObject = {
            id: id,
            dataModel: this.userModel,
            key: 'employeeId',
            value: dto.employeeId,
            error: 'This employee ID is already exist!',
        };
        await this.checkUniquenessService.compare_forUPDATE(empId_checkingObject);
        let profileImageKey = isExist === null || isExist === void 0 ? void 0 : isExist.profileImage;
        if (files && files.images && files.images.length !== 0) {
            const removed = await this.s3BucketService.removeFiles([
                isExist.profileImage,
            ]);
            if (removed) {
                const imageUrls = await this.s3BucketService.uploadFiles(files.images, `Users/${isExist.number}`);
                profileImageKey = imageUrls[0];
            }
        }
        const updatingData = Object.assign(Object.assign({}, dto), { profileImage: profileImageKey });
        const editLog = {
            method: edit_log_enum_1.EditLogOptions.UPDATE_PROPERTIES,
            userId: userId,
            target: 'User',
            origin: id,
            data: updatingData,
            successMessage: 'User updated successfully!',
            errorMessage: 'Cannot update this user!',
        };
        const response = await this.editLogService.add_toEditLog(this.userModel, editLog);
        if (response.message) {
            await this.hiddenActionService.reload_when_userUpdatings(id);
        }
        return response;
    }
    async changeUserStatus(id, userId) {
        if (id === userId) {
            throw new common_1.ConflictException('You cannot change your account!');
        }
        const isExist = await this.userModel.findOne({ _id: id });
        if (!isExist) {
            throw new common_1.ConflictException('Cannot find this user!');
        }
        const changeStatusModel = {
            targetId: isExist._id,
            target: 'user',
            dataModel: this.userModel,
            currentStatus: isExist.status,
        };
        return await this.statusChangerService.changeStatus(changeStatusModel);
    }
    async deleteUser(id, userId) {
        if (id === userId) {
            throw new common_1.ConflictException('You cannot delete your account!');
        }
        const isExist = await this.userModel.findOne({ _id: id });
        if (!isExist) {
            throw new common_1.ConflictException('Cannot find this user!');
        }
        const deleter = await this.userModel.deleteOne({ _id: id });
        if (deleter.deletedCount !== 1) {
            throw new common_1.BadRequestException('Cannot delete this user!');
        }
        return { message: 'User deleted successfully!' };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        uniqueness_checker_service_1.CheckUniquenessService,
        unique_code_generator_service_1.UniqueCodeGeneratorService,
        email_sender_service_1.EmailSenderService,
        table_pagination_service_1.PaginationService,
        status_changer_service_1.statusChangerService,
        aws_s3_bucket_service_1.AwsS3BucketService,
        hidden_action_service_1.HiddenActionService,
        system_log_service_1.SystemLogService,
        edit_log_service_1.EditLogService,
        email_template_1.EmailTemplateService])
], UserService);
//# sourceMappingURL=user.service.js.map