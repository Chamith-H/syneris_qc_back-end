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
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { PaginationService } from 'src/config/services/table-pagination/table-pagination.service';
import { SapB1RequestService } from 'src/controllers/sap-integration/sap-b1-request/sap-b1-request.service';
import { ItemTestDocument } from 'src/schemas/common/item-test.schema';
import { WarehouseTestDocument } from 'src/schemas/common/warehouse-test.schema';
import { EligibleItemDto } from './dto/eligible-item.dto';
import { EligibleWarehouseDto } from './dto/eligible-warehouse.dto';
import { FilterWarehouseDto } from './dto/filter-warehouse.dto';
export declare class EligibleService {
    private readonly itemTestModel;
    private readonly warehouseTestModel;
    private readonly sapB1Service;
    private readonly paginationService;
    constructor(itemTestModel: Model<ItemTestDocument>, warehouseTestModel: Model<WarehouseTestDocument>, sapB1Service: SapB1RequestService, paginationService: PaginationService);
    getItems(dto: EligibleItemDto, pagination: PaginationStructure): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    getWarehouses(dto: EligibleWarehouseDto, pagination: PaginationStructure): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    warehouseDrop(dto: FilterWarehouseDto): Promise<{
        name: string;
        _id: string;
    }[]>;
}
