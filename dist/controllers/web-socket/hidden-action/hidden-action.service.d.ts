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
import { AwsS3BucketService } from 'src/config/services/aws-s3-bucket/aws-s3-bucket.service';
import { RoleDocument } from 'src/schemas/user-management/role.schema';
import { UserDocument } from 'src/schemas/user-management/user.schema';
import { SocketGateway } from '../socket.gateway';
export declare class HiddenActionService {
    private readonly userModel;
    private readonly roleModel;
    private readonly s3BucketService;
    private readonly socketGateway;
    constructor(userModel: Model<UserDocument>, roleModel: Model<RoleDocument>, s3BucketService: AwsS3BucketService, socketGateway: SocketGateway);
    reload_when_userUpdatings(userId: string): Promise<void>;
    reload_when_roleUpdatings(roleId: string): Promise<void>;
    reload_when_permissionUpdatings(roleId: string): Promise<void>;
}
