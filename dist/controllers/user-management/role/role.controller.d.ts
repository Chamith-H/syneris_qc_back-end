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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { RoleService } from './role.service';
import { RoleDto } from './dto/role.dto';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { FilterRoleDto } from './dto/filter-role.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    createRole(dto: RoleDto, user: string): Promise<{
        message: string;
    }>;
    getRoles(pagination: PaginationStructure, dto: FilterRoleDto): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    updateRole(id: string, dto: RoleDto, userId: string): Promise<{
        message: string;
    }>;
    changeStatus(id: string, userId: string): Promise<{
        message: string;
    }>;
    deleteRole(id: string, userId: string): Promise<{
        message: string;
    }>;
    getCustomRoles(id: string): Promise<(import("mongoose").Document<unknown, {}, import("src/schemas/user-management/role.schema").RoleDocument> & import("src/schemas/user-management/role.schema").Role & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    selectedRolePermissions(id: string): Promise<import("mongoose").Document<unknown, {}, import("src/schemas/user-management/role.schema").RoleDocument> & import("src/schemas/user-management/role.schema").Role & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    ManagePermissions(id: string, dto: UpdatePermissionDto): Promise<import("mongoose").Document<unknown, {}, import("src/schemas/user-management/role.schema").RoleDocument> & import("src/schemas/user-management/role.schema").Role & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getRolesForDropdown(): Promise<import("src/config/interfaces/drop-down.structure").DropdownStructure[]>;
}
