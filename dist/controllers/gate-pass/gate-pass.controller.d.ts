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
import { GatePassService } from './gate-pass.service';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { FilterPoDto } from './dto/filter-po.dto';
import { GatePassDto } from './dto/gate-pass.dto';
import { GatePassFullDto } from './dto/gate-pass-full.dto';
import { FilterGAtePassDto } from './dto/filter-gatepass.dto';
export declare class GatePassController {
    private readonly gatePassService;
    constructor(gatePassService: GatePassService);
    getItemData(pagination: PaginationStructure, dto: FilterPoDto): Promise<{
        data: any[];
        dataCount: number;
        pageCount: number;
        currentPage: number;
    }>;
    createGatePass(dto: GatePassDto, userId: string): Promise<{
        data: import("mongoose").Document<unknown, {}, import("src/schemas/gate-pass/gate-pass.schema").GatePassDocument> & import("src/schemas/gate-pass/gate-pass.schema").GatePass & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
        message: string;
    }>;
    checkPo(po: string): Promise<{
        message: string;
    }>;
    updateGatePass(id: string, dto: GatePassFullDto): Promise<{
        message: string;
    }>;
    getRGatePasses(pagination: PaginationStructure, dto: FilterGAtePassDto): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    getGatePass(id: string): Promise<import("mongoose").Document<unknown, {}, import("src/schemas/gate-pass/gate-pass.schema").GatePassDocument> & import("src/schemas/gate-pass/gate-pass.schema").GatePass & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteGatePass(id: string): Promise<{
        message: string;
    }>;
    getGatePassView(id: string): Promise<import("mongoose").Document<unknown, {}, import("src/schemas/gate-pass/gate-pass.schema").GatePassDocument> & import("src/schemas/gate-pass/gate-pass.schema").GatePass & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
