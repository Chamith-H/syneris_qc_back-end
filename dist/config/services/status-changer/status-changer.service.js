"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusChangerService = void 0;
const common_1 = require("@nestjs/common");
class statusChangerService {
    async changeStatus(changeStatusModel) {
        let changingAction = null;
        if (changeStatusModel.currentStatus === false) {
            changingAction = 'enable';
        }
        else {
            changingAction = 'disable';
        }
        const statusChangeRequest = await changeStatusModel.dataModel.updateOne({ _id: changeStatusModel.targetId }, { $set: { status: !changeStatusModel.currentStatus } });
        if (statusChangeRequest.modifiedCount !== 1) {
            throw new common_1.BadRequestException(`Cannot ${changingAction} this ${changeStatusModel.target}!`);
        }
        return {
            message: `${changeStatusModel.target} ${changingAction} successfully!`,
        };
    }
}
exports.statusChangerService = statusChangerService;
//# sourceMappingURL=status-changer.service.js.map