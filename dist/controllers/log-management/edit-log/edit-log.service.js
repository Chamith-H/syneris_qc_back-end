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
exports.EditLogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const edit_log_schema_1 = require("../../../schemas/log-management/edit.log.schema");
const edit_log_enum_1 = require("../../../config/enums/log-management/edit-log.enum");
let EditLogService = class EditLogService {
    constructor(editLogModel) {
        this.editLogModel = editLogModel;
    }
    async add_toEditLog(dataModel, dto) {
        if (dto.method === edit_log_enum_1.EditLogOptions.UPDATE_PROPERTIES) {
            const updateStatus = await dataModel.updateOne({ _id: dto.origin }, { $set: dto.data });
            if (updateStatus.matchedCount !== 1) {
                throw new common_1.UnprocessableEntityException(dto.errorMessage);
            }
        }
        else if (dto.method === edit_log_enum_1.EditLogOptions.PUSH_TO_ARRAY) {
            const updateStatus = await dataModel.updateOne({ _id: dto.origin }, { $push: dto.data });
            if (updateStatus.matchedCount !== 1) {
                throw new common_1.UnprocessableEntityException(dto.errorMessage);
            }
        }
        else if (dto.method === edit_log_enum_1.EditLogOptions.PULL_FROM_ARRAY) {
            const updateStatus = await dataModel.updateOne({ _id: dto.origin }, { $pull: dto.data });
            if (updateStatus.matchedCount !== 1) {
                throw new common_1.UnprocessableEntityException(dto.errorMessage);
            }
        }
        const editLog = {
            origin: dto.origin,
            data: dto.data,
            target: dto.target,
            editBy: dto.userId,
            editedDate: new Date(),
        };
        const newEditLog = new this.editLogModel(editLog);
        await newEditLog.save();
        return { message: dto.successMessage };
    }
};
exports.EditLogService = EditLogService;
exports.EditLogService = EditLogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(edit_log_schema_1.EditLog.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EditLogService);
//# sourceMappingURL=edit-log.service.js.map