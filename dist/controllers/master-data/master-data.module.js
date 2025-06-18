"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterDataModule = void 0;
const common_1 = require("@nestjs/common");
const item_service_1 = require("./item/item.service");
const item_controller_1 = require("./item/item.controller");
const sap_integration_module_1 = require("../sap-integration/sap-integration.module");
const mongoose_1 = require("@nestjs/mongoose");
const item_test_schema_1 = require("../../schemas/common/item-test.schema");
const table_pagination_service_1 = require("../../config/services/table-pagination/table-pagination.service");
let MasterDataModule = class MasterDataModule {
};
exports.MasterDataModule = MasterDataModule;
exports.MasterDataModule = MasterDataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: item_test_schema_1.ItemTest.name, schema: item_test_schema_1.ItemTestSchema },
            ]),
            sap_integration_module_1.SapIntegrationModule,
        ],
        providers: [item_service_1.ItemService, table_pagination_service_1.PaginationService],
        controllers: [item_controller_1.ItemController],
    })
], MasterDataModule);
//# sourceMappingURL=master-data.module.js.map