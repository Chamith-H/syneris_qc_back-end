"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SapIntegrationModule = void 0;
const common_1 = require("@nestjs/common");
const b1_session_service_1 = require("./config/b1-session.service");
const b1_api_service_1 = require("./config/b1-api.service");
const sap_b1_request_controller_1 = require("./sap-b1-request/sap-b1-request.controller");
const sap_b1_request_service_1 = require("./sap-b1-request/sap-b1-request.service");
const mongoose_1 = require("@nestjs/mongoose");
const sap_session_schema_1 = require("../../schemas/common/sap-session.schema");
const dropdown_converter_service_1 = require("../../config/services/dropdown-converter/dropdown-converter.service");
const sap_master_schema_1 = require("../../schemas/common/sap-master.schema");
const sap_master_service_1 = require("./sap-master/sap-master.service");
const sap_master_controller_1 = require("./sap-master/sap-master.controller");
let SapIntegrationModule = class SapIntegrationModule {
};
exports.SapIntegrationModule = SapIntegrationModule;
exports.SapIntegrationModule = SapIntegrationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: sap_session_schema_1.SapSession.name, schema: sap_session_schema_1.SapSessionSchema },
                { name: sap_master_schema_1.SapMaster.name, schema: sap_master_schema_1.SapMasterSchema },
            ]),
        ],
        providers: [
            b1_session_service_1.B1SessionService,
            b1_api_service_1.B1ApiService,
            sap_b1_request_service_1.SapB1RequestService,
            dropdown_converter_service_1.DropdownConverterService,
            sap_master_service_1.SapMasterService,
        ],
        controllers: [sap_b1_request_controller_1.SapB1RequestController, sap_master_controller_1.SapMasterController],
        exports: [sap_b1_request_service_1.SapB1RequestService],
    })
], SapIntegrationModule);
//# sourceMappingURL=sap-integration.module.js.map