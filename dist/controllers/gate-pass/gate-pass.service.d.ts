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
import { SapB1RequestService } from '../sap-integration/sap-b1-request/sap-b1-request.service';
import { FilterPoDto } from './dto/filter-po.dto';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { GatePassDto } from './dto/gate-pass.dto';
import { GatePass, GatePassDocument } from 'src/schemas/gate-pass/gate-pass.schema';
import { Model } from 'mongoose';
import { UserDocument } from 'src/schemas/user-management/user.schema';
import { UniqueCodeGeneratorService } from 'src/config/services/unique-code-generator/unique-code-generator.service';
import { UtcDateGenerator } from 'src/config/services/utc-date-generator/utc-date.generator';
import { GatePassFullDto } from './dto/gate-pass-full.dto';
import { FilterGAtePassDto } from './dto/filter-gatepass.dto';
import { PaginationService } from 'src/config/services/table-pagination/table-pagination.service';
export declare class GatePassService {
    private readonly gatePassModel;
    private readonly userModel;
    private readonly sapB1Service;
    private readonly uniqueCodeGenetatorService;
    private readonly dateCreaterService;
    private readonly paginationService;
    constructor(gatePassModel: Model<GatePassDocument>, userModel: Model<UserDocument>, sapB1Service: SapB1RequestService, uniqueCodeGenetatorService: UniqueCodeGeneratorService, dateCreaterService: UtcDateGenerator, paginationService: PaginationService);
    getPOs(dto: FilterPoDto, pagination: PaginationStructure): Promise<{
        data: any[];
        dataCount: number;
        pageCount: number;
        currentPage: number;
    }>;
    gateCheckIn(dto: GatePassDto, userId: string): Promise<{
        data: import("mongoose").Document<unknown, {}, GatePassDocument> & GatePass & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
        message: string;
    }>;
    checkPo(poNumber: number): Promise<{
        message: string;
    }>;
    updateGatePass(id: string, dto: GatePassFullDto): Promise<{
        message: string;
    }>;
    getGatePassWithPagination(dto: FilterGAtePassDto, pagination: PaginationStructure): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    getSelectedGatePass(id: string): Promise<import("mongoose").Document<unknown, {}, GatePassDocument> & GatePass & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteGatePass(id: string): Promise<{
        message: string;
    }>;
    viewGatePass(id: string): Promise<import("mongoose").Document<unknown, {}, GatePassDocument> & GatePass & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
