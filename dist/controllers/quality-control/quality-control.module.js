"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualityControlModule = void 0;
const common_1 = require("@nestjs/common");
const qc_parameter_service_1 = require("./qc-parameter/qc-parameter.service");
const qc_parameter_controller_1 = require("./qc-parameter/qc-parameter.controller");
const mongoose_1 = require("@nestjs/mongoose");
const uom_schema_1 = require("../../schemas/quality-control/qc-parameter/uom.schema");
const equipment_schema_1 = require("../../schemas/quality-control/qc-parameter/equipment.schema");
const qc_parameter_schema_1 = require("../../schemas/quality-control/qc-parameter/qc-parameter.schema");
const unique_code_generator_service_1 = require("../../config/services/unique-code-generator/unique-code-generator.service");
const utc_date_generator_1 = require("../../config/services/utc-date-generator/utc-date.generator");
const table_pagination_service_1 = require("../../config/services/table-pagination/table-pagination.service");
const uniqueness_checker_service_1 = require("../../config/services/uniqueness-checker/uniqueness-checker.service");
const stage_service_1 = require("./stage/stage.service");
const stage_controller_1 = require("./stage/stage.controller");
const stage_schema_1 = require("../../schemas/quality-control/stage/stage.schema");
const inspection_service_1 = require("./inspection/inspection.service");
const inspection_controller_1 = require("./inspection/inspection.controller");
const quality_checking_schema_1 = require("../../schemas/quality-control/inspection/quality-checking.schema");
const stage_head_schema_1 = require("../../schemas/quality-control/stage/stage-head.schema");
const sap_test_schema_1 = require("../../schemas/common/sap-test.schema");
const eligible_service_1 = require("./eligible/eligible.service");
const eligible_controller_1 = require("./eligible/eligible.controller");
const item_test_schema_1 = require("../../schemas/common/item-test.schema");
const sap_integration_module_1 = require("../sap-integration/sap-integration.module");
const warehouse_test_schema_1 = require("../../schemas/common/warehouse-test.schema");
let QualityControlModule = class QualityControlModule {
};
exports.QualityControlModule = QualityControlModule;
exports.QualityControlModule = QualityControlModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: uom_schema_1.Uom.name, schema: uom_schema_1.UomSchema },
                { name: equipment_schema_1.Equipment.name, schema: equipment_schema_1.EquipmentSchema },
                { name: qc_parameter_schema_1.QcParameter.name, schema: qc_parameter_schema_1.QcParameterSchema },
                { name: stage_schema_1.Stage.name, schema: stage_schema_1.StageSchema },
                { name: stage_head_schema_1.StageHead.name, schema: stage_head_schema_1.StageHeadSchema },
                { name: quality_checking_schema_1.QualityChecking.name, schema: quality_checking_schema_1.QualityCheckingSchema },
                { name: sap_test_schema_1.SapTest.name, schema: sap_test_schema_1.SapTestSchema },
                { name: item_test_schema_1.ItemTest.name, schema: item_test_schema_1.ItemTestSchema },
                { name: warehouse_test_schema_1.WarehouseTest.name, schema: warehouse_test_schema_1.WarehouseTestSchema },
            ]),
            sap_integration_module_1.SapIntegrationModule,
        ],
        providers: [
            qc_parameter_service_1.QcParameterService,
            unique_code_generator_service_1.UniqueCodeGeneratorService,
            utc_date_generator_1.UtcDateGenerator,
            table_pagination_service_1.PaginationService,
            uniqueness_checker_service_1.CheckUniquenessService,
            stage_service_1.StageService,
            inspection_service_1.InspectionService,
            eligible_service_1.EligibleService,
        ],
        controllers: [
            qc_parameter_controller_1.QcParameterController,
            stage_controller_1.StageController,
            inspection_controller_1.InspectionController,
            eligible_controller_1.EligibleController,
        ],
    })
], QualityControlModule);
//# sourceMappingURL=quality-control.module.js.map