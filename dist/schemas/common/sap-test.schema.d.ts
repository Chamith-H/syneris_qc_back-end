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
import { UserDocument } from '../user-management/user.schema';
export type SapTestDocument = SapTest & Document;
export declare class SapTest {
    DocNum: number;
    ItemCode: string;
    Line: number;
    CreationDate: string;
    U_Approval: string;
    U_ActionedBy: UserDocument['_id'];
    U_ActionedNote: string;
    U_ActionedDate: Date;
    U_ActionedWarehouse: string;
    U_Round: number;
}
export declare const SapTestSchema: import("mongoose").Schema<SapTest, import("mongoose").Model<SapTest, any, any, any, Document<unknown, any, SapTest> & SapTest & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SapTest, Document<unknown, {}, import("mongoose").FlatRecord<SapTest>> & import("mongoose").FlatRecord<SapTest> & {
    _id: import("mongoose").Types.ObjectId;
}>;
