"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagementModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user/user.service");
const user_controller_1 = require("./user/user.controller");
const role_service_1 = require("./role/role.service");
const role_controller_1 = require("./role/role.controller");
const permission_service_1 = require("./permission/permission.service");
const permission_controller_1 = require("./permission/permission.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../../schemas/user-management/user.schema");
const role_schema_1 = require("../../schemas/user-management/role.schema");
const permission_schema_1 = require("../../schemas/user-management/permission.schema");
const log_management_module_1 = require("../log-management/log-management.module");
const web_socket_module_1 = require("../web-socket/web-socket.module");
const email_sender_service_1 = require("../../config/services/email-sender/email-sender.service");
const unique_code_generator_service_1 = require("../../config/services/unique-code-generator/unique-code-generator.service");
const table_pagination_service_1 = require("../../config/services/table-pagination/table-pagination.service");
const uniqueness_checker_service_1 = require("../../config/services/uniqueness-checker/uniqueness-checker.service");
const status_changer_service_1 = require("../../config/services/status-changer/status-changer.service");
const aws_s3_bucket_service_1 = require("../../config/services/aws-s3-bucket/aws-s3-bucket.service");
const email_template_1 = require("../../config/templates/email.template");
let UserManagementModule = class UserManagementModule {
};
exports.UserManagementModule = UserManagementModule;
exports.UserManagementModule = UserManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
                { name: role_schema_1.Role.name, schema: role_schema_1.RoleSchema },
                { name: permission_schema_1.Permission.name, schema: permission_schema_1.PermissionSchema },
            ]),
            log_management_module_1.LogManagementModule,
            web_socket_module_1.WebSocketModule,
        ],
        providers: [
            user_service_1.UserService,
            role_service_1.RoleService,
            permission_service_1.PermissionService,
            email_sender_service_1.EmailSenderService,
            unique_code_generator_service_1.UniqueCodeGeneratorService,
            uniqueness_checker_service_1.CheckUniquenessService,
            status_changer_service_1.statusChangerService,
            table_pagination_service_1.PaginationService,
            aws_s3_bucket_service_1.AwsS3BucketService,
            email_sender_service_1.EmailSenderService,
            email_template_1.EmailTemplateService,
        ],
        controllers: [user_controller_1.UserController, role_controller_1.RoleController, permission_controller_1.PermissionController],
    })
], UserManagementModule);
//# sourceMappingURL=user-management.module.js.map