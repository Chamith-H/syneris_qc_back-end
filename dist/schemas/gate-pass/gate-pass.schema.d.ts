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
export type GatePassDocument = GatePass & Document;
export declare class GatePass {
    number: number;
    gatePassId: string;
    driverName: string;
    driverNic: string;
    driverLicense: string;
    driverMobile: any;
    vehicleType: string;
    vehicleNumber: string;
    description: string;
    po: number;
    lineItems: any[];
    state: string;
    createdBy: UserDocument['_id'];
    createdDate: Date;
}
export declare const GatePassSchema: import("mongoose").Schema<GatePass, import("mongoose").Model<GatePass, any, any, any, Document<unknown, any, GatePass> & GatePass & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, GatePass, Document<unknown, {}, import("mongoose").FlatRecord<GatePass>> & import("mongoose").FlatRecord<GatePass> & {
    _id: import("mongoose").Types.ObjectId;
}>;
