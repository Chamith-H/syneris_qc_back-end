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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const platform_express_1 = require("@nestjs/platform-express");
const parsed_body_decorator_1 = require("../../../config/decorators/parsed-body.decorator");
const user_dto_1 = require("./dto/user.dto");
const user_decorator_1 = require("../../../config/decorators/user.decorator");
const pagination_decorator_1 = require("../../../config/decorators/pagination.decorator");
const filter_decorator_1 = require("../../../config/decorators/filter.decorator");
const filter_user_dto_1 = require("./dto/filter-user.dto");
const access_decorator_1 = require("../../../config/decorators/access.decorator");
const permission_enum_1 = require("../../../config/enums/user-management/permission.enum");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(files, dto, userId) {
        return await this.userService.createUser(dto, files, userId);
    }
    async getRoles(pagination, dto) {
        return await this.userService.getUsers(dto, pagination);
    }
    async getUserForView(id) {
        return await this.userService.getSingleUserForView(id);
    }
    async getUserForEdit(id) {
        return await this.userService.getSingleUserForEdit(id);
    }
    async updateUser(id, files, dto, userId) {
        return await this.userService.updateUser(id, dto, files, userId);
    }
    async changeStatus(id, userId) {
        return await this.userService.changeUserStatus(id, userId);
    }
    async deleteUser(id, userId) {
        return await this.userService.deleteUser(id, userId);
    }
};
exports.UserController = UserController;
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.ADD_USER),
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'images', maxCount: 1 }])),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, parsed_body_decorator_1.ParsedBody)()),
    __param(2, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, user_dto_1.UserDto, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.VIEW_USERS_LIST),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('all'),
    __param(0, (0, pagination_decorator_1.Pagination)()),
    __param(1, (0, filter_decorator_1.FilterObject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, filter_user_dto_1.FilterUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getRoles", null);
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.DETAIL_USER),
    (0, common_1.Get)('detailed-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserForView", null);
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.EDIT_USER),
    (0, common_1.Get)('for-edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserForEdit", null);
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.EDIT_USER),
    (0, common_1.Put)('edit/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'images', maxCount: 1 }])),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, parsed_body_decorator_1.ParsedBody)()),
    __param(3, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, user_dto_1.UserDto, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.CHANGE_USER_STATUS),
    (0, common_1.Get)('change/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeStatus", null);
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.DELETE_USER),
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map