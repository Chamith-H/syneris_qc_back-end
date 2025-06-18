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
exports.StageService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const table_pagination_service_1 = require("../../../config/services/table-pagination/table-pagination.service");
const unique_code_generator_service_1 = require("../../../config/services/unique-code-generator/unique-code-generator.service");
const uniqueness_checker_service_1 = require("../../../config/services/uniqueness-checker/uniqueness-checker.service");
const utc_date_generator_1 = require("../../../config/services/utc-date-generator/utc-date.generator");
const stage_schema_1 = require("../../../schemas/quality-control/stage/stage.schema");
const stage_head_schema_1 = require("../../../schemas/quality-control/stage/stage-head.schema");
let StageService = class StageService {
    constructor(stageModel, stageHeadModel, uniqueCodeGenetatorService, dateCreaterService, paginationService, checkUniquenessService) {
        this.stageModel = stageModel;
        this.stageHeadModel = stageHeadModel;
        this.uniqueCodeGenetatorService = uniqueCodeGenetatorService;
        this.dateCreaterService = dateCreaterService;
        this.paginationService = paginationService;
        this.checkUniquenessService = checkUniquenessService;
        this.items = [
            {
                ItemCode: 'AI-SHF-001',
                ItemName: 'Item 1',
            },
            {
                ItemCode: 'AI-SHF-002',
                ItemName: 'Item 2',
            },
            {
                ItemCode: 'AI-SHF-003',
                ItemName: 'Item 3',
            },
            {
                ItemCode: 'AI-SHF-004',
                ItemName: 'Item 4',
            },
            {
                ItemCode: 'AI-SHF-005',
                ItemName: 'Item 5',
            },
            {
                ItemCode: 'AI-SHF-006',
                ItemName: 'Item 6',
            },
            {
                ItemCode: 'AI-SHF-007',
                ItemName: 'Item 7',
            },
            {
                ItemCode: 'AI-SHF-008',
                ItemName: 'Item 8',
            },
            {
                ItemCode: 'AI-SHF-009',
                ItemName: 'Item 9',
            },
            {
                ItemCode: 'AI-SHF-010',
                ItemName: 'Item 10',
            },
        ];
    }
    async getItems() {
        return await this.items;
    }
    async createItemParameter(dto) {
        const newStageHead = {
            stageName: dto.stage,
            itemCode: dto.itemCode,
            method: dto.method,
            sampleCount: parseInt(dto.sampleCount)
        };
        const stageHeadDoc = new this.stageHeadModel(newStageHead);
        const s_response = await stageHeadDoc.save();
        if (s_response) {
            const parameterMapper = await Promise.all(dto.parameterLines.map(async (parameter) => {
                const newStage = {
                    stageName: dto.stage,
                    itemCode: dto.itemCode,
                    parameter: parameter.parameterId,
                    mandatory: parameter.mandatory,
                    minValue: parameter.minValue,
                    maxValue: parameter.maxValue,
                    stdValue: parameter.stdValue,
                    status: parameter.status,
                };
                const stageDoc = new this.stageModel(newStage);
                return await stageDoc.save();
            }));
            if (parameterMapper) {
                return { message: 'QC parameter relation created successfully!' };
            }
        }
    }
    async getItemParameters(dto, pagination) {
        if (dto.itemCode) {
            const regex = new RegExp(dto.itemCode, 'i');
            dto.itemCode = regex;
        }
        const list = await this.stageHeadModel
            .find(dto)
            .skip(pagination.offset)
            .limit(pagination.limit);
        const currentPage = {
            data: list,
            model: this.stageHeadModel,
            query: dto,
            currentPage: pagination.page,
            dataLimit: pagination.limit,
        };
        return await this.paginationService.render_toPAGE(currentPage);
    }
};
exports.StageService = StageService;
exports.StageService = StageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(stage_schema_1.Stage.name)),
    __param(1, (0, mongoose_1.InjectModel)(stage_head_schema_1.StageHead.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        unique_code_generator_service_1.UniqueCodeGeneratorService,
        utc_date_generator_1.UtcDateGenerator,
        table_pagination_service_1.PaginationService,
        uniqueness_checker_service_1.CheckUniquenessService])
], StageService);
//# sourceMappingURL=stage.service.js.map