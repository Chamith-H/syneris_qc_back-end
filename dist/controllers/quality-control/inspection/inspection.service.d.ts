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
import { StartInspectionDto } from './dto/start-inspection.dto';
import { Stage, StageDocument } from 'src/schemas/quality-control/stage/stage.schema';
import { Model } from 'mongoose';
import { QualityChecking, QualityCheckingDocument } from 'src/schemas/quality-control/inspection/quality-checking.schema';
import { ObservedValuesDto } from './dto/update-obsereds.dto';
import { UtcDateGenerator } from 'src/config/services/utc-date-generator/utc-date.generator';
import { SapTestDocument } from 'src/schemas/common/sap-test.schema';
import { StageHead, StageHeadDocument } from 'src/schemas/quality-control/stage/stage-head.schema';
import { InspectionDto } from './dto/inspection.dto';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { PaginationService } from 'src/config/services/table-pagination/table-pagination.service';
import { StartingConfDto } from './dto/starting-conf.dto';
import { SampleDto } from './dto/sample.dto';
import { StartingObserverDto } from './dto/starting-observer.dto';
import { SetActionDto } from './dto/set-action.dto';
import { SaveDataDto } from './dto/save-data.dto';
export declare class InspectionService {
    private readonly stageHeadModel;
    private readonly stageModel;
    private readonly sapTestModel;
    private readonly qualityCheckingModel;
    private readonly dateCreaterService;
    private readonly paginationService;
    constructor(stageHeadModel: Model<StageHeadDocument>, stageModel: Model<StageDocument>, sapTestModel: Model<SapTestDocument>, qualityCheckingModel: Model<QualityCheckingDocument>, dateCreaterService: UtcDateGenerator, paginationService: PaginationService);
    gerPendingInspections(dto: InspectionDto, pagination: PaginationStructure): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    checkingStartingConf(dto: StartingConfDto): Promise<import("mongoose").Document<unknown, {}, StageHeadDocument> & StageHead & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    startQcInspection(dto: StartInspectionDto): Promise<{
        samples: any[];
        values: Omit<import("mongoose").Document<unknown, {}, StageDocument> & Stage & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        sampleValues: any[];
    }>;
    getCheckingValues(dto: StartingObserverDto): Promise<any[]>;
    updateObserveds(dto: ObservedValuesDto, userId: string): Promise<Omit<import("mongoose").Document<unknown, {}, QualityCheckingDocument> & QualityChecking & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    createSamples(dto: SampleDto, userId: string): Promise<{
        message: string;
    }>;
    saveData(dto: SaveDataDto): Promise<import("mongoose").UpdateWriteOpResult[]>;
    setAction(id: string, dto: SetActionDto, userId: string): Promise<{
        message: string;
    }>;
}
