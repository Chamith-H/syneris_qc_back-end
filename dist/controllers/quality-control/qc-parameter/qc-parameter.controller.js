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
exports.QcParameterController = void 0;
const common_1 = require("@nestjs/common");
const qc_parameter_service_1 = require("./qc-parameter.service");
const uom_dto_1 = require("./dto/uom.dto");
const pagination_decorator_1 = require("../../../config/decorators/pagination.decorator");
const filter_decorator_1 = require("../../../config/decorators/filter.decorator");
const uom_filter_dto_1 = require("./dto/uom-filter.dto");
const qc_parameter_dto_1 = require("./dto/qc-parameter.dto");
const qc_parameter_filter_dto_1 = require("./dto/qc-parameter-filter.dto");
let QcParameterController = class QcParameterController {
    constructor(qcParameterService) {
        this.qcParameterService = qcParameterService;
    }
    async createUom(dto) {
        return await this.qcParameterService.createUOM(dto);
    }
    async getUomss(pagination, dto) {
        return await this.qcParameterService.getUoms(dto, pagination);
    }
    async createEquipment(dto) {
        return await this.qcParameterService.createEquipment(dto);
    }
    async getEquipments(pagination, dto) {
        return await this.qcParameterService.getEquipments(dto, pagination);
    }
    async getUomDropdown() {
        return await this.qcParameterService.uomDropdown();
    }
    async getEquipmentDropdown() {
        return await this.qcParameterService.equipmentDropdown();
    }
    async createParameter(dto) {
        return await this.qcParameterService.createQcParameter(dto);
    }
    async getParameters(pagination, dto) {
        return await this.qcParameterService.getQcParameters(dto, pagination);
    }
    async getParameterDropdown() {
        return await this.qcParameterService.getParameterDropdown();
    }
};
exports.QcParameterController = QcParameterController;
__decorate([
    (0, common_1.Post)('create-uom'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [uom_dto_1.UomDto]),
    __metadata("design:returntype", Promise)
], QcParameterController.prototype, "createUom", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('all-uom'),
    __param(0, (0, pagination_decorator_1.Pagination)()),
    __param(1, (0, filter_decorator_1.FilterObject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, uom_filter_dto_1.FilterUomDto]),
    __metadata("design:returntype", Promise)
], QcParameterController.prototype, "getUomss", null);
__decorate([
    (0, common_1.Post)('create-equipment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [uom_dto_1.UomDto]),
    __metadata("design:returntype", Promise)
], QcParameterController.prototype, "createEquipment", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('all-equipment'),
    __param(0, (0, pagination_decorator_1.Pagination)()),
    __param(1, (0, filter_decorator_1.FilterObject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, uom_filter_dto_1.FilterUomDto]),
    __metadata("design:returntype", Promise)
], QcParameterController.prototype, "getEquipments", null);
__decorate([
    (0, common_1.Get)('uom-dropdown'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QcParameterController.prototype, "getUomDropdown", null);
__decorate([
    (0, common_1.Get)('equipment-dropdown'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QcParameterController.prototype, "getEquipmentDropdown", null);
__decorate([
    (0, common_1.Post)('create-parameter'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [qc_parameter_dto_1.QcParameterDto]),
    __metadata("design:returntype", Promise)
], QcParameterController.prototype, "createParameter", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('all-parameters'),
    __param(0, (0, pagination_decorator_1.Pagination)()),
    __param(1, (0, filter_decorator_1.FilterObject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, qc_parameter_filter_dto_1.FilterQcParameterDto]),
    __metadata("design:returntype", Promise)
], QcParameterController.prototype, "getParameters", null);
__decorate([
    (0, common_1.Get)('parameter-dropdown'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QcParameterController.prototype, "getParameterDropdown", null);
exports.QcParameterController = QcParameterController = __decorate([
    (0, common_1.Controller)('qc-parameter'),
    __metadata("design:paramtypes", [qc_parameter_service_1.QcParameterService])
], QcParameterController);
//# sourceMappingURL=qc-parameter.controller.js.map