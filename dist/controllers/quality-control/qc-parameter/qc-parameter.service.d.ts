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
import { UtcDateGenerator } from 'src/config/services/utc-date-generator/utc-date.generator';
import { Equipment, EquipmentDocument } from 'src/schemas/quality-control/qc-parameter/equipment.schema';
import { QcParameter, QcParameterDocument } from 'src/schemas/quality-control/qc-parameter/qc-parameter.schema';
import { Uom, UomDocument } from 'src/schemas/quality-control/qc-parameter/uom.schema';
import { UomDto } from './dto/uom.dto';
import { CheckUniquenessService } from 'src/config/services/uniqueness-checker/uniqueness-checker.service';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { FilterUomDto } from './dto/uom-filter.dto';
import { EquipmentDto } from './dto/equipment.dto';
import { FilterEquipmentDto } from './dto/equipment-filter.dto';
import { QcParameterDto } from './dto/qc-parameter.dto';
export declare class QcParameterService {
    private readonly uomModel;
    private readonly equipmentModel;
    private readonly qcParameterModel;
    private readonly uniqueCodeGenetatorService;
    private readonly dateCreaterService;
    private readonly paginationService;
    private readonly checkUniquenessService;
    constructor(uomModel: Model<UomDocument>, equipmentModel: Model<EquipmentDocument>, qcParameterModel: Model<QcParameterDocument>, uniqueCodeGenetatorService: UniqueCodeGeneratorService, dateCreaterService: UtcDateGenerator, paginationService: PaginationService, checkUniquenessService: CheckUniquenessService);
    createUOM(dto: UomDto): Promise<{
        message: string;
    }>;
    getUoms(dto: FilterUomDto, pagination: PaginationStructure): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    createEquipment(dto: EquipmentDto): Promise<{
        message: string;
    }>;
    getEquipments(dto: FilterEquipmentDto, pagination: PaginationStructure): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    uomDropdown(): Promise<(import("mongoose").Document<unknown, {}, UomDocument> & Uom & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    equipmentDropdown(): Promise<(import("mongoose").Document<unknown, {}, EquipmentDocument> & Equipment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createQcParameter(dto: QcParameterDto): Promise<{
        message: string;
    }>;
    getQcParameters(dto: FilterUomDto, pagination: PaginationStructure): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    getParameterDropdown(): Promise<(import("mongoose").Document<unknown, {}, QcParameterDocument> & QcParameter & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
