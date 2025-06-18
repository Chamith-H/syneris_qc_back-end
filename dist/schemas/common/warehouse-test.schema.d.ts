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
export type WarehouseTestDocument = WarehouseTest & Document;
export declare class WarehouseTest {
    WarehouseName: string;
    WarehouseCode: string;
    U_RejectWH: string;
}
export declare const WarehouseTestSchema: import("mongoose").Schema<WarehouseTest, import("mongoose").Model<WarehouseTest, any, any, any, Document<unknown, any, WarehouseTest> & WarehouseTest & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, WarehouseTest, Document<unknown, {}, import("mongoose").FlatRecord<WarehouseTest>> & import("mongoose").FlatRecord<WarehouseTest> & {
    _id: import("mongoose").Types.ObjectId;
}>;
