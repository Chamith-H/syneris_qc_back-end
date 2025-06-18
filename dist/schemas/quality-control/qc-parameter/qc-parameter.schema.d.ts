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
import { UomDocument } from './uom.schema';
import { EquipmentDocument } from './equipment.schema';
export type QcParameterDocument = QcParameter & Document;
export declare class QcParameter {
    name: string;
    code: string;
    uom: UomDocument['_id'];
    equipment: EquipmentDocument['_id'];
    category: string;
    type: string;
}
export declare const QcParameterSchema: import("mongoose").Schema<QcParameter, import("mongoose").Model<QcParameter, any, any, any, Document<unknown, any, QcParameter> & QcParameter & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, QcParameter, Document<unknown, {}, import("mongoose").FlatRecord<QcParameter>> & import("mongoose").FlatRecord<QcParameter> & {
    _id: import("mongoose").Types.ObjectId;
}>;
