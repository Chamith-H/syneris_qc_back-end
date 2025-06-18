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
exports.StageController = void 0;
const common_1 = require("@nestjs/common");
const stage_service_1 = require("./stage.service");
const item_parameter_dto_1 = require("./dto/item-parameter.dto");
const pagination_decorator_1 = require("../../../config/decorators/pagination.decorator");
const filter_decorator_1 = require("../../../config/decorators/filter.decorator");
const item_parameter_filter_dto_1 = require("./dto/item-parameter-filter.dto");
let StageController = class StageController {
    constructor(stageService) {
        this.stageService = stageService;
    }
    async getItems() {
        return await this.stageService.getItems();
    }
    async createItemParameter(dto) {
        return await this.stageService.createItemParameter(dto);
    }
    async getParameters(pagination, dto) {
        return await this.stageService.getItemParameters(dto, pagination);
    }
};
exports.StageController = StageController;
__decorate([
    (0, common_1.Get)('items'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StageController.prototype, "getItems", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_parameter_dto_1.ItemParameterDto]),
    __metadata("design:returntype", Promise)
], StageController.prototype, "createItemParameter", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('all'),
    __param(0, (0, pagination_decorator_1.Pagination)()),
    __param(1, (0, filter_decorator_1.FilterObject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, item_parameter_filter_dto_1.FilterItemParameterDto]),
    __metadata("design:returntype", Promise)
], StageController.prototype, "getParameters", null);
exports.StageController = StageController = __decorate([
    (0, common_1.Controller)('stage'),
    __metadata("design:paramtypes", [stage_service_1.StageService])
], StageController);
//# sourceMappingURL=stage.controller.js.map