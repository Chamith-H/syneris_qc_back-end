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
import { InspectionService } from './inspection.service';
import { StartInspectionDto } from './dto/start-inspection.dto';
import { ObservedValuesDto } from './dto/update-obsereds.dto';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { InspectionDto } from './dto/inspection.dto';
import { StartingConfDto } from './dto/starting-conf.dto';
import { SampleDto } from './dto/sample.dto';
import { StartingObserverDto } from './dto/starting-observer.dto';
import { SetActionDto } from './dto/set-action.dto';
import { SaveDataDto } from './dto/save-data.dto';
export declare class InspectionController {
    private inspectionService;
    constructor(inspectionService: InspectionService);
    getParameters(pagination: PaginationStructure, dto: InspectionDto): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    getStartConf(dto: StartingConfDto): Promise<import("mongoose").Document<unknown, {}, import("src/schemas/quality-control/stage/stage-head.schema").StageHeadDocument> & import("src/schemas/quality-control/stage/stage-head.schema").StageHead & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    startInspection(dto: StartInspectionDto): Promise<{
        samples: any[];
        values: Omit<import("mongoose").Document<unknown, {}, import("src/schemas/quality-control/stage/stage.schema").StageDocument> & import("src/schemas/quality-control/stage/stage.schema").Stage & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        sampleValues: any[];
    }>;
    checkingItems(dto: StartingObserverDto): Promise<any[]>;
    updateObserveds(dto: ObservedValuesDto, userId: string): Promise<Omit<import("mongoose").Document<unknown, {}, import("src/schemas/quality-control/inspection/quality-checking.schema").QualityCheckingDocument> & import("src/schemas/quality-control/inspection/quality-checking.schema").QualityChecking & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    createSamples(dto: SampleDto, userId: string): Promise<{
        message: string;
    }>;
    savedata(dto: SaveDataDto): Promise<import("mongoose").UpdateWriteOpResult[]>;
    setAction(id: string, dto: SetActionDto, userId: string): Promise<{
        message: string;
    }>;
}
