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
exports.GatePassService = void 0;
const common_1 = require("@nestjs/common");
const sap_b1_request_service_1 = require("../sap-integration/sap-b1-request/sap-b1-request.service");
const mongoose_1 = require("@nestjs/mongoose");
const gate_pass_schema_1 = require("../../schemas/gate-pass/gate-pass.schema");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../schemas/user-management/user.schema");
const unique_code_generator_service_1 = require("../../config/services/unique-code-generator/unique-code-generator.service");
const utc_date_generator_1 = require("../../config/services/utc-date-generator/utc-date.generator");
const table_pagination_service_1 = require("../../config/services/table-pagination/table-pagination.service");
let GatePassService = class GatePassService {
    constructor(gatePassModel, userModel, sapB1Service, uniqueCodeGenetatorService, dateCreaterService, paginationService) {
        this.gatePassModel = gatePassModel;
        this.userModel = userModel;
        this.sapB1Service = sapB1Service;
        this.uniqueCodeGenetatorService = uniqueCodeGenetatorService;
        this.dateCreaterService = dateCreaterService;
        this.paginationService = paginationService;
    }
    async getPOs(dto, pagination) {
        let filterString = '';
        let counterString = '';
        let queryArray = [];
        const isEmptyFilter = Object.keys(dto).length === 0;
        if (!isEmptyFilter) {
            if (dto.docNum) {
                queryArray.push(`substringof('${dto.docNum}',DocNum)`);
            }
            const queryCount = queryArray.length;
            const filterQuery = queryArray.map((eachFilter, index) => {
                if (queryCount === 1 || index === queryCount - 1) {
                    return eachFilter;
                }
                else {
                    return `${eachFilter} and`;
                }
            });
            const finalQuery = filterQuery.join(' ');
            filterString = '&$filter=' + finalQuery;
            counterString = '?$filter=' + finalQuery;
        }
        const pagingData = await this.sapB1Service.getPOs(pagination.limit, pagination.offset, pagination.page, filterString, counterString);
        return pagingData;
    }
    async gateCheckIn(dto, userId) {
        const uniqueCodeObject = {
            dataModel: this.gatePassModel,
            prefix: 'GP-',
        };
        const uniqueCode = await this.uniqueCodeGenetatorService.create_newUniqueCode(uniqueCodeObject);
        const todayDate = await this.dateCreaterService.getTodayDate();
        const newGatePass = Object.assign(Object.assign({ number: uniqueCode.requestNumber, gatePassId: uniqueCode.requestId }, dto), { po: null, lineItems: [], state: 'Draft', createdBy: userId, createdDate: todayDate });
        const newGatePassDocument = new this.gatePassModel(newGatePass);
        const response = await newGatePassDocument.save();
        if (response) {
            const originData = await this.gatePassModel
                .findOne({
                gatePassId: uniqueCode.requestId,
            })
                .populate({ path: 'createdBy' });
            return {
                data: originData,
                message: 'Check-in completed!',
            };
        }
    }
    async checkPo(poNumber) {
        return {
            message: 'Done',
        };
    }
    async updateGatePass(id, dto) {
        const updater = await this.gatePassModel.updateOne({ _id: id }, { $set: Object.assign(Object.assign({}, dto), { state: 'Completed' }) });
        if (updater) {
            return { message: 'Saved successfully!' };
        }
    }
    async getGatePassWithPagination(dto, pagination) {
        if (dto.driverName) {
            const regex = new RegExp(dto.driverName, 'i');
            dto.driverName = regex;
        }
        if (dto.driverNic) {
            const regex = new RegExp(dto.driverNic, 'i');
            dto.driverNic = regex;
        }
        if (dto.vehicleNumber) {
            const regex = new RegExp(dto.vehicleNumber, 'i');
            dto.vehicleNumber = regex;
        }
        const list = await this.gatePassModel
            .find(dto)
            .populate({ path: 'createdBy' })
            .skip(pagination.offset)
            .limit(pagination.limit)
            .sort({ number: -1 });
        const currentPage = {
            data: list,
            model: this.gatePassModel,
            query: dto,
            currentPage: pagination.page,
            dataLimit: pagination.limit,
        };
        return await this.paginationService.render_toPAGE(currentPage);
    }
    async getSelectedGatePass(id) {
        const gatePass = await this.gatePassModel
            .findOne({ _id: id })
            .populate({ path: 'createdBy' });
        return gatePass;
    }
    async deleteGatePass(id) {
        const deleter = await this.gatePassModel.deleteOne({ _id: id });
        if (deleter) {
            return {
                message: 'Gate Pass deleted successfully!',
            };
        }
    }
    async viewGatePass(id) {
        const gatePass = await this.gatePassModel
            .findOne({ _id: id })
            .populate({ path: 'createdBy' });
        return gatePass;
    }
};
exports.GatePassService = GatePassService;
exports.GatePassService = GatePassService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(gate_pass_schema_1.GatePass.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        sap_b1_request_service_1.SapB1RequestService,
        unique_code_generator_service_1.UniqueCodeGeneratorService,
        utc_date_generator_1.UtcDateGenerator,
        table_pagination_service_1.PaginationService])
], GatePassService);
//# sourceMappingURL=gate-pass.service.js.map