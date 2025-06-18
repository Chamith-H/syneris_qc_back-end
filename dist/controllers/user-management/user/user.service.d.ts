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
import { EmailSenderService } from './../../../config/services/email-sender/email-sender.service';
import { AwsS3BucketService } from 'src/config/services/aws-s3-bucket/aws-s3-bucket.service';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from 'src/schemas/user-management/user.schema';
import { Model } from 'mongoose';
import { CheckUniquenessService } from 'src/config/services/uniqueness-checker/uniqueness-checker.service';
import { UniqueCodeGeneratorService } from 'src/config/services/unique-code-generator/unique-code-generator.service';
import { PaginationService } from 'src/config/services/table-pagination/table-pagination.service';
import { statusChangerService } from 'src/config/services/status-changer/status-changer.service';
import { SystemLogService } from 'src/controllers/log-management/system-log/system-log.service';
import { EditLogService } from 'src/controllers/log-management/edit-log/edit-log.service';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { FilterUserDto } from './dto/filter-user.dto';
import { HiddenActionService } from 'src/controllers/web-socket/hidden-action/hidden-action.service';
import { EmailTemplateService } from 'src/config/templates/email.template';
export declare class UserService {
    private readonly userModel;
    private readonly checkUniquenessService;
    private readonly uniqueCodeGenetatorService;
    private readonly emailSenderService;
    private readonly paginationService;
    private readonly statusChangerService;
    private readonly s3BucketService;
    private readonly hiddenActionService;
    private readonly systemLogService;
    private readonly editLogService;
    private readonly emailTemplateService;
    constructor(userModel: Model<UserDocument>, checkUniquenessService: CheckUniquenessService, uniqueCodeGenetatorService: UniqueCodeGeneratorService, emailSenderService: EmailSenderService, paginationService: PaginationService, statusChangerService: statusChangerService, s3BucketService: AwsS3BucketService, hiddenActionService: HiddenActionService, systemLogService: SystemLogService, editLogService: EditLogService, emailTemplateService: EmailTemplateService);
    createUser(dto: UserDto, files: any, userId: string): Promise<{
        message: string;
    }>;
    getUsers(dto: FilterUserDto, pagination: PaginationStructure): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    getSingleUserForView(id: string): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getSingleUserForEdit(id: string): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateUser(id: string, dto: UserDto, files: any, userId: string): Promise<{
        message: string;
    }>;
    changeUserStatus(id: string, userId: string): Promise<{
        message: string;
    }>;
    deleteUser(id: string, userId: string): Promise<{
        message: string;
    }>;
}
