"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckUniquenessService = void 0;
const common_1 = require("@nestjs/common");
class CheckUniquenessService {
    async compare_forCREATE(checkUniqueModel) {
        const filter = {
            [checkUniqueModel.key]: checkUniqueModel.value,
        };
        const existDocument = await checkUniqueModel.dataModel
            .findOne(filter)
            .collation({ locale: 'en', strength: 2 });
        if (existDocument) {
            throw new common_1.ConflictException(checkUniqueModel.error);
        }
    }
    async compare_forUPDATE(checkUniqueModel) {
        const filter = {
            [checkUniqueModel.key]: checkUniqueModel.value,
        };
        const existDocument = await checkUniqueModel.dataModel
            .findOne(filter)
            .collation({ locale: 'en', strength: 2 });
        if (existDocument && existDocument.id !== checkUniqueModel.id) {
            throw new common_1.ConflictException(checkUniqueModel.error);
        }
    }
}
exports.CheckUniquenessService = CheckUniquenessService;
//# sourceMappingURL=uniqueness-checker.service.js.map