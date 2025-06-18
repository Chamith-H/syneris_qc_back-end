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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const role_enum_1 = require("../../../config/enums/user-management/role.enum");
const table_pagination_service_1 = require("../../../config/services/table-pagination/table-pagination.service");
const unique_code_generator_service_1 = require("../../../config/services/unique-code-generator/unique-code-generator.service");
const uniqueness_checker_service_1 = require("../../../config/services/uniqueness-checker/uniqueness-checker.service");
const edit_log_service_1 = require("../../log-management/edit-log/edit-log.service");
const system_log_service_1 = require("../../log-management/system-log/system-log.service");
const hidden_action_service_1 = require("../../web-socket/hidden-action/hidden-action.service");
const role_schema_1 = require("../../../schemas/user-management/role.schema");
const user_schema_1 = require("../../../schemas/user-management/user.schema");
const edit_log_enum_1 = require("../../../config/enums/log-management/edit-log.enum");
const user_enum_1 = require("../../../config/enums/user-management/user.enum");
const status_changer_service_1 = require("../../../config/services/status-changer/status-changer.service");
let RoleService = class RoleService {
    constructor(roleModel, userModel, checkUniquenessService, uniqueCodeGenetatorService, paginationService, statusChangerService, hiddenActionService, systemLogService, editLogService) {
        this.roleModel = roleModel;
        this.userModel = userModel;
        this.checkUniquenessService = checkUniquenessService;
        this.uniqueCodeGenetatorService = uniqueCodeGenetatorService;
        this.paginationService = paginationService;
        this.statusChangerService = statusChangerService;
        this.hiddenActionService = hiddenActionService;
        this.systemLogService = systemLogService;
        this.editLogService = editLogService;
    }
    async createRole(dto, user) {
        const checkingObject = {
            dataModel: this.roleModel,
            key: 'name',
            value: dto.name,
            error: 'This user role has been already created!',
        };
        await this.checkUniquenessService.compare_forCREATE(checkingObject);
        const uniqueCodeObject = {
            dataModel: this.roleModel,
            prefix: 'R-',
        };
        const uniqueCode = await this.uniqueCodeGenetatorService.create_newUniqueCode(uniqueCodeObject);
        const newRole = Object.assign(Object.assign({ number: uniqueCode.requestNumber, roleId: uniqueCode.requestId }, dto), { type: role_enum_1.RoleType.CUSTOM_ROLE, userCount: 0, permissions: [] });
        const systemLog = {
            userId: user,
            target: 'Role',
            data: newRole,
            successMessage: 'User role created successfully!',
            errorMessage: 'Cannot create this role!',
        };
        return await this.systemLogService.add_toSystemLog(this.roleModel, systemLog);
    }
    async getRoles(dto, pagination) {
        if (dto.name) {
            const regex = new RegExp(dto.name, 'i');
            dto.name = regex;
        }
        const list = await this.roleModel
            .find(dto)
            .skip(pagination.offset)
            .limit(pagination.limit)
            .sort({ number: -1 });
        const currentPage = {
            data: list,
            model: this.roleModel,
            query: dto,
            currentPage: pagination.page,
            dataLimit: pagination.limit,
        };
        return await this.paginationService.render_toPAGE(currentPage);
    }
    async updateRole(id, dto, userId) {
        const isExist = await this.roleModel.findOne({ _id: id });
        if (!isExist) {
            throw new common_1.ConflictException('Cannot find this user role!');
        }
        const checkingObject = {
            id: id,
            dataModel: this.roleModel,
            key: 'name',
            value: dto.name,
            error: 'This user role is already exist!',
        };
        await this.checkUniquenessService.compare_forUPDATE(checkingObject);
        const editLog = {
            method: edit_log_enum_1.EditLogOptions.UPDATE_PROPERTIES,
            userId: userId,
            target: 'Role',
            origin: id,
            data: dto,
            successMessage: 'User role updated successfully!',
            errorMessage: 'Cannot update this user role!',
        };
        const response = await this.editLogService.add_toEditLog(this.roleModel, editLog);
        if (response.message) {
            await this.hiddenActionService.reload_when_roleUpdatings(id);
        }
        return response;
    }
    async getRolesForDropdown() {
        const keyValues = await this.roleModel
            .find({ type: role_enum_1.RoleType.CUSTOM_ROLE, status: true })
            .select('_id name');
        return keyValues;
    }
    async getRolesForPermissions(id) {
        return await this.roleModel
            .find({
            type: role_enum_1.RoleType.CUSTOM_ROLE,
            _id: { $ne: id },
        })
            .select('_id name');
    }
    async getSelectedRolePermissions(id) {
        return await this.roleModel.findById(id).select('permissions');
    }
    async updatePermissions(id, dto) {
        const updater = await this.roleModel.findByIdAndUpdate(id, dto);
        if (!updater) {
            throw new common_1.BadRequestException('Cannot update permissions');
        }
        await this.hiddenActionService.reload_when_permissionUpdatings(id);
        return await this.roleModel.findById(id);
    }
    async changeRoleStatus(id, userId) {
        const requestedUser = await this.userModel.findOne({ _id: userId });
        if (requestedUser.role === id &&
            requestedUser.type !== user_enum_1.UserType.SUPER_USER) {
            throw new common_1.ConflictException('You cannot change your role!');
        }
        const isExist = await this.roleModel.findOne({ _id: id });
        if (!isExist) {
            throw new common_1.ConflictException('Cannot find this user role!');
        }
        const changeStatusModel = {
            targetId: isExist._id,
            target: 'user role',
            dataModel: this.roleModel,
            currentStatus: isExist.status,
        };
        return await this.statusChangerService.changeStatus(changeStatusModel);
    }
    async deleteRole(id, userId) {
        const requestedUser = await this.userModel.findOne({ _id: userId });
        if (requestedUser.role === id &&
            requestedUser.type !== user_enum_1.UserType.SUPER_USER) {
            throw new common_1.ConflictException('You cannot delete your role!');
        }
        const isExist = await this.roleModel.findOne({ _id: id });
        if (!isExist) {
            throw new common_1.ConflictException('Cannot find this user role!');
        }
        if (isExist.userCount > 0) {
            throw new common_1.ConflictException(`Cannot delete! This role has been assigned to ${isExist.userCount} users`);
        }
        const deleteRequest = await this.roleModel.deleteOne({ _id: id });
        if (deleteRequest.deletedCount !== 1) {
            throw new common_1.BadRequestException('Cannot delete this role!');
        }
        return { message: 'User role deleted successfully!' };
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(role_schema_1.Role.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        uniqueness_checker_service_1.CheckUniquenessService,
        unique_code_generator_service_1.UniqueCodeGeneratorService,
        table_pagination_service_1.PaginationService,
        status_changer_service_1.statusChangerService,
        hidden_action_service_1.HiddenActionService,
        system_log_service_1.SystemLogService,
        edit_log_service_1.EditLogService])
], RoleService);
//# sourceMappingURL=role.service.js.map