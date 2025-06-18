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
exports.GatePassController = void 0;
const common_1 = require("@nestjs/common");
const gate_pass_service_1 = require("./gate-pass.service");
const pagination_decorator_1 = require("../../config/decorators/pagination.decorator");
const filter_decorator_1 = require("../../config/decorators/filter.decorator");
const filter_po_dto_1 = require("./dto/filter-po.dto");
const gate_pass_dto_1 = require("./dto/gate-pass.dto");
const user_decorator_1 = require("../../config/decorators/user.decorator");
const gate_pass_full_dto_1 = require("./dto/gate-pass-full.dto");
const filter_gatepass_dto_1 = require("./dto/filter-gatepass.dto");
let GatePassController = class GatePassController {
    constructor(gatePassService) {
        this.gatePassService = gatePassService;
    }
    async getItemData(pagination, dto) {
        return await this.gatePassService.getPOs(dto, pagination);
    }
    async createGatePass(dto, userId) {
        return await this.gatePassService.gateCheckIn(dto, userId);
    }
    async checkPo(po) {
        return await this.gatePassService.checkPo(Number(po));
    }
    async updateGatePass(id, dto) {
        return await this.gatePassService.updateGatePass(id, dto);
    }
    async getRGatePasses(pagination, dto) {
        return await this.gatePassService.getGatePassWithPagination(dto, pagination);
    }
    async getGatePass(id) {
        return await this.gatePassService.getSelectedGatePass(id);
    }
    async deleteGatePass(id) {
        return await this.gatePassService.deleteGatePass(id);
    }
    async getGatePassView(id) {
        return await this.gatePassService.viewGatePass(id);
    }
};
exports.GatePassController = GatePassController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('all-po'),
    __param(0, (0, pagination_decorator_1.Pagination)()),
    __param(1, (0, filter_decorator_1.FilterObject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, filter_po_dto_1.FilterPoDto]),
    __metadata("design:returntype", Promise)
], GatePassController.prototype, "getItemData", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gate_pass_dto_1.GatePassDto, String]),
    __metadata("design:returntype", Promise)
], GatePassController.prototype, "createGatePass", null);
__decorate([
    (0, common_1.Get)('check-po/:po'),
    __param(0, (0, common_1.Param)('po')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GatePassController.prototype, "checkPo", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, gate_pass_full_dto_1.GatePassFullDto]),
    __metadata("design:returntype", Promise)
], GatePassController.prototype, "updateGatePass", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('all'),
    __param(0, (0, pagination_decorator_1.Pagination)()),
    __param(1, (0, filter_decorator_1.FilterObject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, filter_gatepass_dto_1.FilterGAtePassDto]),
    __metadata("design:returntype", Promise)
], GatePassController.prototype, "getRGatePasses", null);
__decorate([
    (0, common_1.Get)('gate-pass/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GatePassController.prototype, "getGatePass", null);
__decorate([
    (0, common_1.Delete)('remove/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GatePassController.prototype, "deleteGatePass", null);
__decorate([
    (0, common_1.Get)('gate-pass-view/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GatePassController.prototype, "getGatePassView", null);
exports.GatePassController = GatePassController = __decorate([
    (0, common_1.Controller)('gate-pass'),
    __metadata("design:paramtypes", [gate_pass_service_1.GatePassService])
], GatePassController);
//# sourceMappingURL=gate-pass.controller.js.map