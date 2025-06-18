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
exports.InspectionController = void 0;
const common_1 = require("@nestjs/common");
const inspection_service_1 = require("./inspection.service");
const start_inspection_dto_1 = require("./dto/start-inspection.dto");
const update_obsereds_dto_1 = require("./dto/update-obsereds.dto");
const user_decorator_1 = require("../../../config/decorators/user.decorator");
const pagination_decorator_1 = require("../../../config/decorators/pagination.decorator");
const filter_decorator_1 = require("../../../config/decorators/filter.decorator");
const inspection_dto_1 = require("./dto/inspection.dto");
const starting_conf_dto_1 = require("./dto/starting-conf.dto");
const sample_dto_1 = require("./dto/sample.dto");
const starting_observer_dto_1 = require("./dto/starting-observer.dto");
const set_action_dto_1 = require("./dto/set-action.dto");
const save_data_dto_1 = require("./dto/save-data.dto");
let InspectionController = class InspectionController {
    constructor(inspectionService) {
        this.inspectionService = inspectionService;
    }
    async getParameters(pagination, dto) {
        return await this.inspectionService.gerPendingInspections(dto, pagination);
    }
    async getStartConf(dto) {
        return await this.inspectionService.checkingStartingConf(dto);
    }
    async startInspection(dto) {
        return await this.inspectionService.startQcInspection(dto);
    }
    async checkingItems(dto) {
        return await this.inspectionService.getCheckingValues(dto);
    }
    async updateObserveds(dto, userId) {
        return await this.inspectionService.updateObserveds(dto, userId);
    }
    async createSamples(dto, userId) {
        return await this.inspectionService.createSamples(dto, userId);
    }
    async savedata(dto) {
        return await this.inspectionService.saveData(dto);
    }
    async setAction(id, dto, userId) {
        return await this.inspectionService.setAction(id, dto, userId);
    }
};
exports.InspectionController = InspectionController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('all'),
    __param(0, (0, pagination_decorator_1.Pagination)()),
    __param(1, (0, filter_decorator_1.FilterObject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, inspection_dto_1.InspectionDto]),
    __metadata("design:returntype", Promise)
], InspectionController.prototype, "getParameters", null);
__decorate([
    (0, common_1.Post)('start-conf'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [starting_conf_dto_1.StartingConfDto]),
    __metadata("design:returntype", Promise)
], InspectionController.prototype, "getStartConf", null);
__decorate([
    (0, common_1.Post)('start'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [start_inspection_dto_1.StartInspectionDto]),
    __metadata("design:returntype", Promise)
], InspectionController.prototype, "startInspection", null);
__decorate([
    (0, common_1.Post)('start-config'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [starting_observer_dto_1.StartingObserverDto]),
    __metadata("design:returntype", Promise)
], InspectionController.prototype, "checkingItems", null);
__decorate([
    (0, common_1.Post)('update-observeds'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_obsereds_dto_1.ObservedValuesDto, String]),
    __metadata("design:returntype", Promise)
], InspectionController.prototype, "updateObserveds", null);
__decorate([
    (0, common_1.Post)('create-samples'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sample_dto_1.SampleDto, String]),
    __metadata("design:returntype", Promise)
], InspectionController.prototype, "createSamples", null);
__decorate([
    (0, common_1.Post)('save-data'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_data_dto_1.SaveDataDto]),
    __metadata("design:returntype", Promise)
], InspectionController.prototype, "savedata", null);
__decorate([
    (0, common_1.Put)('set-action/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, set_action_dto_1.SetActionDto, String]),
    __metadata("design:returntype", Promise)
], InspectionController.prototype, "setAction", null);
exports.InspectionController = InspectionController = __decorate([
    (0, common_1.Controller)('inspection'),
    __metadata("design:paramtypes", [inspection_service_1.InspectionService])
], InspectionController);
//# sourceMappingURL=inspection.controller.js.map