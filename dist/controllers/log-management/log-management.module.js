"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogManagementModule = void 0;
const common_1 = require("@nestjs/common");
const system_log_service_1 = require("./system-log/system-log.service");
const edit_log_service_1 = require("./edit-log/edit-log.service");
const mongoose_1 = require("@nestjs/mongoose");
const system_log_schema_1 = require("../../schemas/log-management/system-log.schema");
const edit_log_schema_1 = require("../../schemas/log-management/edit.log.schema");
let LogManagementModule = class LogManagementModule {
};
exports.LogManagementModule = LogManagementModule;
exports.LogManagementModule = LogManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: system_log_schema_1.SystemLog.name, schema: system_log_schema_1.SystemLogSchema },
                { name: edit_log_schema_1.EditLog.name, schema: edit_log_schema_1.EditLogSchema },
            ]),
        ],
        providers: [system_log_service_1.SystemLogService, edit_log_service_1.EditLogService],
        exports: [system_log_service_1.SystemLogService, edit_log_service_1.EditLogService],
    })
], LogManagementModule);
//# sourceMappingURL=log-management.module.js.map