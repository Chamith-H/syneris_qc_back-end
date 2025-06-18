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
exports.QcParameterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const table_pagination_service_1 = require("../../../config/services/table-pagination/table-pagination.service");
const unique_code_generator_service_1 = require("../../../config/services/unique-code-generator/unique-code-generator.service");
const utc_date_generator_1 = require("../../../config/services/utc-date-generator/utc-date.generator");
const equipment_schema_1 = require("../../../schemas/quality-control/qc-parameter/equipment.schema");
const qc_parameter_schema_1 = require("../../../schemas/quality-control/qc-parameter/qc-parameter.schema");
const uom_schema_1 = require("../../../schemas/quality-control/qc-parameter/uom.schema");
const uniqueness_checker_service_1 = require("../../../config/services/uniqueness-checker/uniqueness-checker.service");
let QcParameterService = class QcParameterService {
    constructor(uomModel, equipmentModel, qcParameterModel, uniqueCodeGenetatorService, dateCreaterService, paginationService, checkUniquenessService) {
        this.uomModel = uomModel;
        this.equipmentModel = equipmentModel;
        this.qcParameterModel = qcParameterModel;
        this.uniqueCodeGenetatorService = uniqueCodeGenetatorService;
        this.dateCreaterService = dateCreaterService;
        this.paginationService = paginationService;
        this.checkUniquenessService = checkUniquenessService;
    }
    async createUOM(dto) {
        const checkingObjectCode = {
            dataModel: this.uomModel,
            key: 'code',
            value: dto.code,
            error: 'This UOM code has been already created!',
        };
        await this.checkUniquenessService.compare_forCREATE(checkingObjectCode);
        const checkingObjectName = {
            dataModel: this.uomModel,
            key: 'name',
            value: dto.name,
            error: 'This UOM name has been already created!',
        };
        await this.checkUniquenessService.compare_forCREATE(checkingObjectName);
        const newUom = new this.uomModel(dto);
        const response = await newUom.save();
        if (response) {
            return { message: 'UOM created successfuly!' };
        }
    }
    async getUoms(dto, pagination) {
        if (dto.code) {
            const regex = new RegExp(dto.code, 'i');
            dto.code = regex;
        }
        if (dto.name) {
            const regex = new RegExp(dto.name, 'i');
            dto.name = regex;
        }
        const list = await this.uomModel
            .find(dto)
            .skip(pagination.offset)
            .limit(pagination.limit);
        const currentPage = {
            data: list,
            model: this.uomModel,
            query: dto,
            currentPage: pagination.page,
            dataLimit: pagination.limit,
        };
        return await this.paginationService.render_toPAGE(currentPage);
    }
    async createEquipment(dto) {
        const checkingObjectCode = {
            dataModel: this.equipmentModel,
            key: 'code',
            value: dto.code,
            error: 'This UOM code has been already created!',
        };
        await this.checkUniquenessService.compare_forCREATE(checkingObjectCode);
        const checkingObjectName = {
            dataModel: this.equipmentModel,
            key: 'name',
            value: dto.name,
            error: 'This UOM name has been already created!',
        };
        await this.checkUniquenessService.compare_forCREATE(checkingObjectName);
        const newUom = new this.equipmentModel(dto);
        const response = await newUom.save();
        if (response) {
            return { message: 'Equipment created successfuly!' };
        }
    }
    async getEquipments(dto, pagination) {
        if (dto.code) {
            const regex = new RegExp(dto.code, 'i');
            dto.code = regex;
        }
        if (dto.name) {
            const regex = new RegExp(dto.name, 'i');
            dto.name = regex;
        }
        const list = await this.equipmentModel
            .find(dto)
            .skip(pagination.offset)
            .limit(pagination.limit);
        const currentPage = {
            data: list,
            model: this.equipmentModel,
            query: dto,
            currentPage: pagination.page,
            dataLimit: pagination.limit,
        };
        return await this.paginationService.render_toPAGE(currentPage);
    }
    async uomDropdown() {
        return await this.uomModel.find({});
    }
    async equipmentDropdown() {
        return await this.equipmentModel.find({});
    }
    async createQcParameter(dto) {
        const checkingObjectCode = {
            dataModel: this.qcParameterModel,
            key: 'code',
            value: dto.code,
            error: 'This parameter code has been already created!',
        };
        await this.checkUniquenessService.compare_forCREATE(checkingObjectCode);
        const checkingObjectName = {
            dataModel: this.qcParameterModel,
            key: 'name',
            value: dto.name,
            error: 'This parameter name has been already created!',
        };
        await this.checkUniquenessService.compare_forCREATE(checkingObjectName);
        const newParameter = new this.qcParameterModel(dto);
        const response = await newParameter.save();
        if (response) {
            return { message: 'QC parameter created successfuly!' };
        }
    }
    async getQcParameters(dto, pagination) {
        if (dto.code) {
            const regex = new RegExp(dto.code, 'i');
            dto.code = regex;
        }
        if (dto.name) {
            const regex = new RegExp(dto.name, 'i');
            dto.name = regex;
        }
        const list = await this.qcParameterModel
            .find(dto)
            .populate('uom equipment')
            .skip(pagination.offset)
            .limit(pagination.limit);
        const currentPage = {
            data: list,
            model: this.qcParameterModel,
            query: dto,
            currentPage: pagination.page,
            dataLimit: pagination.limit,
        };
        return await this.paginationService.render_toPAGE(currentPage);
    }
    async getParameterDropdown() {
        return await this.qcParameterModel.find({});
    }
};
exports.QcParameterService = QcParameterService;
exports.QcParameterService = QcParameterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(uom_schema_1.Uom.name)),
    __param(1, (0, mongoose_1.InjectModel)(equipment_schema_1.Equipment.name)),
    __param(2, (0, mongoose_1.InjectModel)(qc_parameter_schema_1.QcParameter.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        unique_code_generator_service_1.UniqueCodeGeneratorService,
        utc_date_generator_1.UtcDateGenerator,
        table_pagination_service_1.PaginationService,
        uniqueness_checker_service_1.CheckUniquenessService])
], QcParameterService);
//# sourceMappingURL=qc-parameter.service.js.map