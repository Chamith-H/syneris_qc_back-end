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
exports.HiddenActionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const aws_s3_bucket_service_1 = require("../../../config/services/aws-s3-bucket/aws-s3-bucket.service");
const role_schema_1 = require("../../../schemas/user-management/role.schema");
const user_schema_1 = require("../../../schemas/user-management/user.schema");
const socket_gateway_1 = require("../socket.gateway");
let HiddenActionService = class HiddenActionService {
    constructor(userModel, roleModel, s3BucketService, socketGateway) {
        this.userModel = userModel;
        this.roleModel = roleModel;
        this.s3BucketService = s3BucketService;
        this.socketGateway = socketGateway;
    }
    async reload_when_userUpdatings(userId) {
        var _a, _b;
        const user = await this.userModel
            .findOne({ _id: userId })
            .populate({ path: 'role', populate: { path: 'permissions' } });
        const userProfileImage = await this.s3BucketService.getSingleFile(user.profileImage);
        const activeUser = {
            userId: user._id,
            name: user.name,
            type: user.type,
            roleId: user.role._id,
            roleName: user.role.name,
            profileImage: userProfileImage.url,
        };
        const permissionNumbers = (_b = (_a = user.role) === null || _a === void 0 ? void 0 : _a.permissions) === null || _b === void 0 ? void 0 : _b.map((permission) => {
            return permission.permissionNo;
        });
        const changedUser = {
            requestedUser: userId,
            userData: JSON.stringify(activeUser),
            accessNumbers: JSON.stringify(permissionNumbers),
        };
        this.socketGateway.refreshUser(changedUser);
    }
    async reload_when_roleUpdatings(roleId) {
        const role = await this.roleModel.findOne({ _id: roleId });
        const changedRole = {
            requestedRole: roleId,
            roleName: role.name,
        };
        this.socketGateway.refreshRole(changedRole);
    }
    async reload_when_permissionUpdatings(roleId) {
        var _a;
        const role = await this.roleModel
            .findOne({ _id: roleId })
            .populate({ path: 'permissions' });
        const permissionNumbers = (_a = role === null || role === void 0 ? void 0 : role.permissions) === null || _a === void 0 ? void 0 : _a.map((permission) => {
            return permission.permissionNo;
        });
        const changedPermissions = {
            requestedRole: roleId,
            accessNumbers: JSON.stringify(permissionNumbers),
        };
        this.socketGateway.refreshPermissions(changedPermissions);
    }
};
exports.HiddenActionService = HiddenActionService;
exports.HiddenActionService = HiddenActionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(role_schema_1.Role.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        aws_s3_bucket_service_1.AwsS3BucketService,
        socket_gateway_1.SocketGateway])
], HiddenActionService);
//# sourceMappingURL=hidden-action.service.js.map