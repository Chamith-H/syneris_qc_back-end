"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const core_1 = require("@nestjs/core");
const health_module_1 = require("./config/health/health.module");
const auth_module_1 = require("./controllers/auth/auth.module");
const user_management_module_1 = require("./controllers/user-management/user-management.module");
const log_management_module_1 = require("./controllers/log-management/log-management.module");
const jwt_auth_guard_1 = require("./config/guards/jwt-auth.guard");
const web_socket_module_1 = require("./controllers/web-socket/web-socket.module");
const sap_integration_module_1 = require("./controllers/sap-integration/sap-integration.module");
const schedule_1 = require("@nestjs/schedule");
const master_data_module_1 = require("./controllers/master-data/master-data.module");
const gate_pass_module_1 = require("./controllers/gate-pass/gate-pass.module");
const quality_control_module_1 = require("./controllers/quality-control/quality-control.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            config_1.ConfigModule.forRoot(),
            health_module_1.HealthModule,
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI),
            auth_module_1.AuthModule,
            user_management_module_1.UserManagementModule,
            log_management_module_1.LogManagementModule,
            web_socket_module_1.WebSocketModule,
            sap_integration_module_1.SapIntegrationModule,
            master_data_module_1.MasterDataModule,
            gate_pass_module_1.GatePassModule,
            quality_control_module_1.QualityControlModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map