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
exports.InspectionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const stage_schema_1 = require("../../../schemas/quality-control/stage/stage.schema");
const mongoose_2 = require("mongoose");
const quality_checking_schema_1 = require("../../../schemas/quality-control/inspection/quality-checking.schema");
const utc_date_generator_1 = require("../../../config/services/utc-date-generator/utc-date.generator");
const sap_test_schema_1 = require("../../../schemas/common/sap-test.schema");
const stage_head_schema_1 = require("../../../schemas/quality-control/stage/stage-head.schema");
const table_pagination_service_1 = require("../../../config/services/table-pagination/table-pagination.service");
let InspectionService = class InspectionService {
    constructor(stageHeadModel, stageModel, sapTestModel, qualityCheckingModel, dateCreaterService, paginationService) {
        this.stageHeadModel = stageHeadModel;
        this.stageModel = stageModel;
        this.sapTestModel = sapTestModel;
        this.qualityCheckingModel = qualityCheckingModel;
        this.dateCreaterService = dateCreaterService;
        this.paginationService = paginationService;
    }
    async gerPendingInspections(dto, pagination) {
        if (dto.itemCode) {
            const regex = new RegExp(dto.itemCode, 'i');
            dto.itemCode = regex;
        }
        const list = await this.sapTestModel
            .find()
            .skip(pagination.offset)
            .limit(pagination.limit);
        const currentPage = {
            data: list,
            model: this.sapTestModel,
            query: {},
            currentPage: pagination.page,
            dataLimit: pagination.limit,
        };
        return await this.paginationService.render_toPAGE(currentPage);
    }
    async checkingStartingConf(dto) {
        const startingConf = await this.stageHeadModel.findOne(dto);
        return startingConf;
    }
    async startQcInspection(dto) {
        const itemParameters = await this.stageModel
            .find({
            stageName: dto.stageName,
            itemCode: dto.itemCode,
            status: true,
        })
            .populate({ path: 'parameter', populate: { path: 'uom' } });
        if (itemParameters.length === 0) {
            throw new common_1.BadRequestException('No QC-parameters to quality checking!');
        }
        let samples = [];
        let sampleValues = [];
        for (let i = 1; i <= Number(dto.sampleCount); i++) {
            samples.push({ name: `sample ${i}`, colValue: `sample_${i}` });
            sampleValues.push({ [`sample_${i}`]: '' });
        }
        return {
            samples: samples,
            values: itemParameters,
            sampleValues: sampleValues,
        };
    }
    async getCheckingValues(dto) {
        const parameterObservds = await this.qualityCheckingModel
            .find(dto)
            .populate({ path: 'parameter', populate: { path: 'uom' } })
            .populate({ path: 'stage' })
            .sort('sampleNumber');
        const transformed = [];
        for (const obs of parameterObservds) {
            const paramId = obs.parameter._id.toString();
            let existingParam = transformed.find((p) => p.parameterId === paramId);
            const sample = {
                sampleId: obs._id.toString(),
                sampleName: obs.name,
                sampleIndex: obs.sampleNumber,
                observedValue: obs.observedValue,
            };
            if (!existingParam) {
                existingParam = {
                    parameterId: paramId,
                    parameterIdenity: `${obs.parameter.name} / ${obs.parameter.code}`,
                    parameterCategory: obs.parameter.category,
                    parameterType: obs.parameter.type,
                    parameterUom: `${obs.parameter.uom.name} / ${obs.parameter.uom.code}`,
                    mandatory: obs.stage.mandatory,
                    minValue: obs.stage.minValue,
                    maxValue: obs.stage.maxValue,
                    stdValue: obs.stage.stdValue,
                    samplingData: [sample],
                };
                transformed.push(existingParam);
            }
            else {
                existingParam.samplingData.push(sample);
            }
        }
        return transformed;
    }
    async updateObserveds(dto, userId) {
        const valueMapper = await Promise.all(dto.obsData.map(async (o_data) => {
            const valueUpdater = await this.qualityCheckingModel.updateOne({
                _id: o_data.checkingId,
            }, { $set: { observedValue: o_data.observedValue } });
            if (valueUpdater.modifiedCount === 1) {
                const todayDate = await this.dateCreaterService.getTodayDate();
                const checkerUpdater = await this.qualityCheckingModel.updateOne({
                    _id: o_data.checkingId,
                }, { $set: { inspectedBy: userId, inspectedDate: todayDate } });
                if (checkerUpdater.acknowledged) {
                    return valueUpdater;
                }
            }
            else {
                return valueUpdater;
            }
        }));
        if (valueMapper) {
            delete dto.obsData;
            const checkingItems = await this.qualityCheckingModel
                .find(dto)
                .populate({ path: 'parameter', populate: { path: 'uom' } });
            return checkingItems;
        }
    }
    async createSamples(dto, userId) {
        const currentDate = await this.dateCreaterService.getTodayDate();
        const paramValueMapper = await Promise.all(dto.parameterValues.rows.map(async (p_value) => {
            const stage = await this.stageModel.findOne({
                parameter: p_value.parameter,
                stageName: dto.stage,
                itemCode: dto.itemCode,
            });
            const mappedSampler = Object.entries(p_value.sampleData[0]).map(([key, value], index) => ({
                key,
                value,
                index,
            }));
            const sampleMapper = await Promise.all(mappedSampler.map(async (s_data) => {
                const newSample = {
                    name: s_data.key,
                    sampleNumber: parseInt(s_data.key.replace('sample_', '')),
                    stageName: dto.stage,
                    docNum: dto.docNum,
                    itemCode: dto.itemCode,
                    round: dto.round,
                    parameter: p_value.parameter,
                    stage: stage._id.toString(),
                    observedValue: s_data.value,
                    inspectedDate: currentDate,
                    inspectedBy: userId,
                };
                const sampleDoc = new this.qualityCheckingModel(newSample);
                return await sampleDoc.save();
            }));
            return sampleMapper;
        }));
        if (paramValueMapper) {
            const sapUpdater = await this.sapTestModel.updateOne({
                DocNum: dto.docNum,
                ItemCode: dto.itemCode,
                U_Round: dto.round,
            }, { $set: { U_Approval: 'Pending' } });
            if (sapUpdater) {
                return { message: 'QC inspection started successfully!' };
            }
        }
    }
    async saveData(dto) {
        const dataMapper = await Promise.all(dto.data.map(async (sample) => {
            const updater = await this.qualityCheckingModel.updateOne({ _id: sample.sampleId }, { $set: { observedValue: sample.observedValue } });
            return updater;
        }));
        return dataMapper;
    }
    async setAction(id, dto, userId) {
        const currentDate = await this.dateCreaterService.getTodayDate();
        const updateBody = Object.assign({ U_ActionedDate: currentDate, U_ActionedBy: userId }, dto);
        const updater = await this.sapTestModel.updateOne({ _id: id }, { $set: updateBody });
        if (!updater.acknowledged) {
            throw new common_1.BadRequestException('Internal server error!');
        }
        return {
            message: `Inspection ${dto.U_Approval} Successfully!`,
        };
    }
};
exports.InspectionService = InspectionService;
exports.InspectionService = InspectionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(stage_head_schema_1.StageHead.name)),
    __param(1, (0, mongoose_1.InjectModel)(stage_schema_1.Stage.name)),
    __param(2, (0, mongoose_1.InjectModel)(sap_test_schema_1.SapTest.name)),
    __param(3, (0, mongoose_1.InjectModel)(quality_checking_schema_1.QualityChecking.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        utc_date_generator_1.UtcDateGenerator,
        table_pagination_service_1.PaginationService])
], InspectionService);
//# sourceMappingURL=inspection.service.js.map