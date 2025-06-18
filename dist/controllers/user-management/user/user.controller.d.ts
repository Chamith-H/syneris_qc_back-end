/// <reference types="multer" />
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
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { FilterUserDto } from './dto/filter-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(files: Express.Multer.File[], dto: UserDto, userId: string): Promise<{
        message: string;
    }>;
    getRoles(pagination: PaginationStructure, dto: FilterUserDto): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    getUserForView(id: string): Promise<import("mongoose").Document<unknown, {}, import("src/schemas/user-management/user.schema").UserDocument> & import("src/schemas/user-management/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getUserForEdit(id: string): Promise<import("mongoose").Document<unknown, {}, import("src/schemas/user-management/user.schema").UserDocument> & import("src/schemas/user-management/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateUser(id: string, files: Express.Multer.File[], dto: UserDto, userId: string): Promise<{
        message: string;
    }>;
    changeStatus(id: string, userId: string): Promise<{
        message: string;
    }>;
    deleteUser(id: string, userId: string): Promise<{
        message: string;
    }>;
}
