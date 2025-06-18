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
import { QcParameterService } from './qc-parameter.service';
import { UomDto } from './dto/uom.dto';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { FilterUomDto } from './dto/uom-filter.dto';
import { QcParameterDto } from './dto/qc-parameter.dto';
import { FilterQcParameterDto } from './dto/qc-parameter-filter.dto';
export declare class QcParameterController {
    private readonly qcParameterService;
    constructor(qcParameterService: QcParameterService);
    createUom(dto: UomDto): Promise<{
        message: string;
    }>;
    getUomss(pagination: PaginationStructure, dto: FilterUomDto): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    createEquipment(dto: UomDto): Promise<{
        message: string;
    }>;
    getEquipments(pagination: PaginationStructure, dto: FilterUomDto): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    getUomDropdown(): Promise<(import("mongoose").Document<unknown, {}, import("src/schemas/quality-control/qc-parameter/uom.schema").UomDocument> & import("src/schemas/quality-control/qc-parameter/uom.schema").Uom & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getEquipmentDropdown(): Promise<(import("mongoose").Document<unknown, {}, import("src/schemas/quality-control/qc-parameter/equipment.schema").EquipmentDocument> & import("src/schemas/quality-control/qc-parameter/equipment.schema").Equipment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createParameter(dto: QcParameterDto): Promise<{
        message: string;
    }>;
    getParameters(pagination: PaginationStructure, dto: FilterQcParameterDto): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    getParameterDropdown(): Promise<(import("mongoose").Document<unknown, {}, import("src/schemas/quality-control/qc-parameter/qc-parameter.schema").QcParameterDocument> & import("src/schemas/quality-control/qc-parameter/qc-parameter.schema").QcParameter & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
