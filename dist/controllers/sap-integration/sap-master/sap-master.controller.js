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
exports.SapMasterController = void 0;
const common_1 = require("@nestjs/common");
const sap_master_service_1 = require("./sap-master.service");
const master_items_dto_1 = require("./dto/master-items.dto");
let SapMasterController = class SapMasterController {
    constructor(sapMsterService) {
        this.sapMsterService = sapMsterService;
    }
    async getMasterDataForItems() {
        return await this.sapMsterService.get_itemMsterData();
    }
    async getActualData(dto) {
        return await this.sapMsterService.get_actualData(dto);
    }
};
exports.SapMasterController = SapMasterController;
__decorate([
    (0, common_1.Get)('item-msaters'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SapMasterController.prototype, "getMasterDataForItems", null);
__decorate([
    (0, common_1.Post)('item-actual'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [master_items_dto_1.MasterItemsDto]),
    __metadata("design:returntype", Promise)
], SapMasterController.prototype, "getActualData", null);
exports.SapMasterController = SapMasterController = __decorate([
    (0, common_1.Controller)('sap-master'),
    __metadata("design:paramtypes", [sap_master_service_1.SapMasterService])
], SapMasterController);
//# sourceMappingURL=sap-master.controller.js.map