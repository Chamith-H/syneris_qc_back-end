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
exports.SapMasterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const sap_master_schema_1 = require("../../../schemas/common/sap-master.schema");
let SapMasterService = class SapMasterService {
    constructor(masterModel) {
        this.masterModel = masterModel;
    }
    async get_itemMsterData() {
        const itemMasters = await this.masterModel.find({ target: 'Items' });
        const itemGroups = itemMasters.find((master) => master.name === 'Item-Groups');
        const uomGroups = itemMasters.find((master) => master.name === 'UOM-Groups');
        const numberSequences = itemMasters.find((master) => master.name === 'Number-Sequence');
        return {
            itemGroups: itemGroups.data,
            uomGroups: uomGroups.data,
            numberSeqs: numberSequences.data,
        };
    }
    async get_actualData(dto) {
        const itemMasters = await this.masterModel.find({ target: 'Items' });
        const itemGroups = itemMasters.find((master) => master.name === 'Item-Groups');
        const uomGroups = itemMasters.find((master) => master.name === 'UOM-Groups');
        const numberSequences = itemMasters.find((master) => master.name === 'Number-Sequence');
        const itemGroupsArr = itemGroups.data;
        const uomGroupsArr = uomGroups.data;
        const numberSeqs = numberSequences.data;
        const selectedGroup = itemGroupsArr.find((group) => group._id === dto.ItemsGroupCode);
        const selectedUomGroup = uomGroupsArr.find((group) => group._id === dto.UoMGroupEntry);
        dto.UoMGroupEntry = (selectedUomGroup === null || selectedUomGroup === void 0 ? void 0 : selectedUomGroup.name) || 'N/A';
        dto.ItemsGroupCode = (selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.name) || 'N/A';
        dto.ItemType = dto.ItemType.replace('it', '');
        dto.GLMethod = dto.GLMethod.replace(/.*_/, '');
        dto.CostAccountingMethod = dto.CostAccountingMethod.replace(/.*_/, '');
        dto.PlanningSystem = dto.PlanningSystem.replace(/.*_/, '');
        dto.ProcurementMethod = dto.ProcurementMethod.replace(/.*_/, '');
        dto.IssueMethod = dto.IssueMethod.replace(/.*_/, '');
        return dto;
    }
};
exports.SapMasterService = SapMasterService;
exports.SapMasterService = SapMasterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(sap_master_schema_1.SapMaster.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SapMasterService);
//# sourceMappingURL=sap-master.service.js.map