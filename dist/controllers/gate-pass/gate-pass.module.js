"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatePassModule = void 0;
const common_1 = require("@nestjs/common");
const gate_pass_service_1 = require("./gate-pass.service");
const gate_pass_controller_1 = require("./gate-pass.controller");
const sap_integration_module_1 = require("../sap-integration/sap-integration.module");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../../schemas/user-management/user.schema");
const gate_pass_schema_1 = require("../../schemas/gate-pass/gate-pass.schema");
const unique_code_generator_service_1 = require("../../config/services/unique-code-generator/unique-code-generator.service");
const utc_date_generator_1 = require("../../config/services/utc-date-generator/utc-date.generator");
const table_pagination_service_1 = require("../../config/services/table-pagination/table-pagination.service");
let GatePassModule = class GatePassModule {
};
exports.GatePassModule = GatePassModule;
exports.GatePassModule = GatePassModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
                { name: gate_pass_schema_1.GatePass.name, schema: gate_pass_schema_1.GatePassSchema },
            ]),
            sap_integration_module_1.SapIntegrationModule,
        ],
        providers: [
            gate_pass_service_1.GatePassService,
            unique_code_generator_service_1.UniqueCodeGeneratorService,
            utc_date_generator_1.UtcDateGenerator,
            table_pagination_service_1.PaginationService,
        ],
        controllers: [gate_pass_controller_1.GatePassController],
    })
], GatePassModule);
//# sourceMappingURL=gate-pass.module.js.map