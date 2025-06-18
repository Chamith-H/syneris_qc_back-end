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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const role_service_1 = require("./role.service");
const role_dto_1 = require("./dto/role.dto");
const user_decorator_1 = require("../../../config/decorators/user.decorator");
const pagination_decorator_1 = require("../../../config/decorators/pagination.decorator");
const filter_decorator_1 = require("../../../config/decorators/filter.decorator");
const filter_role_dto_1 = require("./dto/filter-role.dto");
const access_decorator_1 = require("../../../config/decorators/access.decorator");
const update_permission_dto_1 = require("./dto/update-permission.dto");
const permission_enum_1 = require("../../../config/enums/user-management/permission.enum");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async createRole(dto, user) {
        return await this.roleService.createRole(dto, user);
    }
    async getRoles(pagination, dto) {
        return await this.roleService.getRoles(dto, pagination);
    }
    async updateRole(id, dto, userId) {
        return await this.roleService.updateRole(id, dto, userId);
    }
    async changeStatus(id, userId) {
        return await this.roleService.changeRoleStatus(id, userId);
    }
    async deleteRole(id, userId) {
        return await this.roleService.deleteRole(id, userId);
    }
    async getCustomRoles(id) {
        return await this.roleService.getRolesForPermissions(id);
    }
    async selectedRolePermissions(id) {
        return await this.roleService.getSelectedRolePermissions(id);
    }
    async ManagePermissions(id, dto) {
        return await this.roleService.updatePermissions(id, dto);
    }
    async getRolesForDropdown() {
        return await this.roleService.getRolesForDropdown();
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.ADD_ROLE),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.RoleDto, String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "createRole", null);
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.VIEW_ROLES_LIST),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('all'),
    __param(0, (0, pagination_decorator_1.Pagination)()),
    __param(1, (0, filter_decorator_1.FilterObject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, filter_role_dto_1.FilterRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getRoles", null);
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.EDIT_ROLE),
    (0, common_1.Put)('edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, role_dto_1.RoleDto, String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "updateRole", null);
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.CHANGE_ROLE_STATUS),
    (0, common_1.Get)('change/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "changeStatus", null);
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.DELETE_ROLE),
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "deleteRole", null);
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.VIEW_PERMISSION_LIST),
    (0, common_1.Get)('customs/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getCustomRoles", null);
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.VIEW_PERMISSION_LIST),
    (0, common_1.Get)('permissions/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "selectedRolePermissions", null);
__decorate([
    (0, access_decorator_1.Access)(permission_enum_1.bPermissions.MANAGE_PERMISSIONS),
    (0, common_1.Put)('manage/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_permission_dto_1.UpdatePermissionDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "ManagePermissions", null);
__decorate([
    (0, common_1.Get)('dropdown'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getRolesForDropdown", null);
exports.RoleController = RoleController = __decorate([
    (0, common_1.Controller)('role'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map