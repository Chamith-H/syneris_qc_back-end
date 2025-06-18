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
exports.EligibleController = void 0;
const common_1 = require("@nestjs/common");
const eligible_service_1 = require("./eligible.service");
const pagination_decorator_1 = require("../../../config/decorators/pagination.decorator");
const filter_decorator_1 = require("../../../config/decorators/filter.decorator");
const eligible_item_dto_1 = require("./dto/eligible-item.dto");
const eligible_warehouse_dto_1 = require("./dto/eligible-warehouse.dto");
const filter_warehouse_dto_1 = require("./dto/filter-warehouse.dto");
let EligibleController = class EligibleController {
    constructor(eligibleService) {
        this.eligibleService = eligibleService;
    }
    async getItemData(pagination, dto) {
        return await this.eligibleService.getItems(dto, pagination);
    }
    async getWarehouseData(pagination, dto) {
        return await this.eligibleService.getWarehouses(dto, pagination);
    }
    async dropWarehouses(dto) {
        return await this.eligibleService.warehouseDrop(dto);
    }
};
exports.EligibleController = EligibleController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('qc-items'),
    __param(0, (0, pagination_decorator_1.Pagination)()),
    __param(1, (0, filter_decorator_1.FilterObject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, eligible_item_dto_1.EligibleItemDto]),
    __metadata("design:returntype", Promise)
], EligibleController.prototype, "getItemData", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('qc-warehouses'),
    __param(0, (0, pagination_decorator_1.Pagination)()),
    __param(1, (0, filter_decorator_1.FilterObject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, eligible_warehouse_dto_1.EligibleWarehouseDto]),
    __metadata("design:returntype", Promise)
], EligibleController.prototype, "getWarehouseData", null);
__decorate([
    (0, common_1.Post)('warehouse-drop'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_warehouse_dto_1.FilterWarehouseDto]),
    __metadata("design:returntype", Promise)
], EligibleController.prototype, "dropWarehouses", null);
exports.EligibleController = EligibleController = __decorate([
    (0, common_1.Controller)('eligible'),
    __metadata("design:paramtypes", [eligible_service_1.EligibleService])
], EligibleController);
//# sourceMappingURL=eligible.controller.js.map