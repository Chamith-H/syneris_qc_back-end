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
import { Document } from 'mongoose';
import { QcParameterDocument } from '../qc-parameter/qc-parameter.schema';
import { UserDocument } from 'src/schemas/user-management/user.schema';
import { StageDocument } from '../stage/stage.schema';
export type QualityCheckingDocument = QualityChecking & Document;
export declare class QualityChecking {
    name: string;
    sampleNumber: number;
    stageName: string;
    docNum: string;
    itemCode: string;
    round: number;
    stage: StageDocument['_id'];
    parameter: QcParameterDocument['_id'];
    observedValue: string;
    inspectedDate: Date;
    inspectedBy: UserDocument['_id'];
}
export declare const QualityCheckingSchema: import("mongoose").Schema<QualityChecking, import("mongoose").Model<QualityChecking, any, any, any, Document<unknown, any, QualityChecking> & QualityChecking & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, QualityChecking, Document<unknown, {}, import("mongoose").FlatRecord<QualityChecking>> & import("mongoose").FlatRecord<QualityChecking> & {
    _id: import("mongoose").Types.ObjectId;
}>;
