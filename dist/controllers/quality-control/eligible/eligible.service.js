"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EligibleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const table_pagination_service_1 = require("../../../config/services/table-pagination/table-pagination.service");
const sap_b1_request_service_1 = require("../../sap-integration/sap-b1-request/sap-b1-request.service");
const item_test_schema_1 = require("../../../schemas/common/item-test.schema");
const warehouse_test_schema_1 = require("../../../schemas/common/warehouse-test.schema");
let EligibleService = class EligibleService {
    constructor(itemTestModel, warehouseTestModel, sapB1Service, paginationService) {
        this.itemTestModel = itemTestModel;
        this.warehouseTestModel = warehouseTestModel;
        this.sapB1Service = sapB1Service;
        this.paginationService = paginationService;
    }
    async getItems(dto, pagination) {
        if (dto.ItemCode) {
            const regex = new RegExp(dto.ItemCode, 'i');
            dto.ItemCode = regex;
        }
        if (dto.ItemName) {
            const regex = new RegExp(dto.ItemName, 'i');
            dto.ItemName = regex;
        }
        const list = await this.itemTestModel
            .find(dto)
            .skip(pagination.offset)
            .limit(pagination.limit)
            .sort({ number: -1 });
        const currentPage = {
            data: list,
            model: this.itemTestModel,
            query: dto,
            currentPage: pagination.page,
            dataLimit: pagination.limit,
        };
        return await this.paginationService.render_toPAGE(currentPage);
    }
    async getWarehouses(dto, pagination) {
        if (dto.WarehouseCode) {
            const regex = new RegExp(dto.WarehouseCode, 'i');
            dto.WarehouseCode = regex;
        }
        if (dto.WarehouseName) {
            const regex = new RegExp(dto.WarehouseName, 'i');
            dto.WarehouseName = regex;
        }
        const list = await this.warehouseTestModel
            .find(dto)
            .skip(pagination.offset)
            .limit(pagination.limit)
            .sort({ number: -1 });
        const currentPage = {
            data: list,
            model: this.warehouseTestModel,
            query: dto,
            currentPage: pagination.page,
            dataLimit: pagination.limit,
        };
        return await this.paginationService.render_toPAGE(currentPage);
    }
    async warehouseDrop(dto) {
        const warehouses = await this.warehouseTestModel.find(dto);
        const warehouseMapper = warehouses.map((wh) => {
            const returner = {
                name: wh.WarehouseName,
                _id: wh.WarehouseCode,
            };
            return returner;
        });
        return warehouseMapper;
    }
};
exports.EligibleService = EligibleService;
exports.EligibleService = EligibleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(item_test_schema_1.ItemTest.name)),
    __param(1, (0, mongoose_1.InjectModel)(warehouse_test_schema_1.WarehouseTest.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        sap_b1_request_service_1.SapB1RequestService,
        table_pagination_service_1.PaginationService])
], EligibleService);
//# sourceMappingURL=eligible.service.js.map