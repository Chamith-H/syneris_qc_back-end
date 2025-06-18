/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { PaginationService } from 'src/config/services/table-pagination/table-pagination.service';
import { UniqueCodeGeneratorService } from 'src/config/services/unique-code-generator/unique-code-generator.service';
import { CheckUniquenessService } from 'src/config/services/uniqueness-checker/uniqueness-checker.service';
import { EditLogService } from 'src/controllers/log-management/edit-log/edit-log.service';
import { SystemLogService } from 'src/controllers/log-management/system-log/system-log.service';
import { HiddenActionService } from 'src/controllers/web-socket/hidden-action/hidden-action.service';
import { Role, RoleDocument } from 'src/schemas/user-management/role.schema';
import { UserDocument } from 'src/schemas/user-management/user.schema';
import { RoleDto } from './dto/role.dto';
import { FilterRoleDto } from './dto/filter-role.dto';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { DropdownStructure } from 'src/config/interfaces/drop-down.structure';
import { statusChangerService } from 'src/config/services/status-changer/status-changer.service';
import { UpdatePermissionDto } from './dto/update-permission.dto';
export declare class RoleService {
    private readonly roleModel;
    private readonly userModel;
    private readonly checkUniquenessService;
    private readonly uniqueCodeGenetatorService;
    private readonly paginationService;
    private readonly statusChangerService;
    private readonly hiddenActionService;
    private readonly systemLogService;
    private readonly editLogService;
    constructor(roleModel: Model<RoleDocument>, userModel: Model<UserDocument>, checkUniquenessService: CheckUniquenessService, uniqueCodeGenetatorService: UniqueCodeGeneratorService, paginationService: PaginationService, statusChangerService: statusChangerService, hiddenActionService: HiddenActionService, systemLogService: SystemLogService, editLogService: EditLogService);
    createRole(dto: RoleDto, user: string): Promise<{
        message: string;
    }>;
    getRoles(dto: FilterRoleDto, pagination: PaginationStructure): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    updateRole(id: string, dto: RoleDto, userId: string): Promise<{
        message: string;
    }>;
    getRolesForDropdown(): Promise<DropdownStructure[]>;
    getRolesForPermissions(id: string): Promise<(import("mongoose").Document<unknown, {}, RoleDocument> & Role & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getSelectedRolePermissions(id: string): Promise<import("mongoose").Document<unknown, {}, RoleDocument> & Role & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updatePermissions(id: string, dto: UpdatePermissionDto): Promise<import("mongoose").Document<unknown, {}, RoleDocument> & Role & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    changeRoleStatus(id: string, userId: string): Promise<{
        message: string;
    }>;
    deleteRole(id: string, userId: string): Promise<{
        message: string;
    }>;
}
