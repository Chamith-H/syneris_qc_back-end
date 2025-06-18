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
import { SapB1RequestService } from 'src/controllers/sap-integration/sap-b1-request/sap-b1-request.service';
import { FilterItemDto } from './dto/filter-item.dto';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { ItemDto } from './dto/item.dto';
import { ItemTestDocument } from 'src/schemas/common/item-test.schema';
import { Model } from 'mongoose';
import { PaginationService } from 'src/config/services/table-pagination/table-pagination.service';
export declare class ItemService {
    private readonly itemTestModel;
    private readonly sapB1Service;
    private readonly paginationService;
    constructor(itemTestModel: Model<ItemTestDocument>, sapB1Service: SapB1RequestService, paginationService: PaginationService);
    getItems(dto: FilterItemDto, pagination: PaginationStructure): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    createNewItem(dto: ItemDto): Promise<{
        message: string;
    }>;
    updateItem(dto: ItemDto): Promise<{
        message: string;
    }>;
}
