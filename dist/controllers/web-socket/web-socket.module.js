"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketModule = void 0;
const common_1 = require("@nestjs/common");
const hidden_action_service_1 = require("./hidden-action/hidden-action.service");
const notification_service_1 = require("./notification/notification.service");
const socket_gateway_1 = require("./socket.gateway");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../../schemas/user-management/user.schema");
const role_schema_1 = require("../../schemas/user-management/role.schema");
const aws_s3_bucket_service_1 = require("../../config/services/aws-s3-bucket/aws-s3-bucket.service");
let WebSocketModule = class WebSocketModule {
};
exports.WebSocketModule = WebSocketModule;
exports.WebSocketModule = WebSocketModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
                { name: role_schema_1.Role.name, schema: role_schema_1.RoleSchema },
            ]),
            socket_gateway_1.SocketGateway,
        ],
        providers: [
            socket_gateway_1.SocketGateway,
            hidden_action_service_1.HiddenActionService,
            notification_service_1.NotificationService,
            aws_s3_bucket_service_1.AwsS3BucketService,
        ],
        exports: [hidden_action_service_1.HiddenActionService],
    })
], WebSocketModule);
//# sourceMappingURL=web-socket.module.js.map