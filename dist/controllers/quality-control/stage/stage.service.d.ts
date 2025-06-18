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
import { UtcDateGenerator } from 'src/config/services/utc-date-generator/utc-date.generator';
import { StageDocument } from 'src/schemas/quality-control/stage/stage.schema';
import { ItemParameterDto } from './dto/item-parameter.dto';
import { FilterItemParameterDto } from './dto/item-parameter-filter.dto';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { StageHeadDocument } from 'src/schemas/quality-control/stage/stage-head.schema';
export declare class StageService {
    private readonly stageModel;
    private readonly stageHeadModel;
    private readonly uniqueCodeGenetatorService;
    private readonly dateCreaterService;
    private readonly paginationService;
    private readonly checkUniquenessService;
    items: {
        ItemCode: string;
        ItemName: string;
    }[];
    constructor(stageModel: Model<StageDocument>, stageHeadModel: Model<StageHeadDocument>, uniqueCodeGenetatorService: UniqueCodeGeneratorService, dateCreaterService: UtcDateGenerator, paginationService: PaginationService, checkUniquenessService: CheckUniquenessService);
    getItems(): Promise<{
        ItemCode: string;
        ItemName: string;
    }[]>;
    createItemParameter(dto: ItemParameterDto): Promise<{
        message: string;
    }>;
    getItemParameters(dto: FilterItemParameterDto, pagination: PaginationStructure): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
}
