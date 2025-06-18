"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownConverterService = void 0;
class DropdownConverterService {
    async defaultStructure(data, objectDefinition) {
        const modifiedStructure = data.map((item) => ({
            _id: item[objectDefinition._id],
            name: item[objectDefinition.name],
        }));
        return await modifiedStructure;
    }
    async nameFirstStructure(data, objectDefinition) {
        const modifiedStructure = data.map((item) => ({
            _id: item[objectDefinition._id],
            name: item[objectDefinition.name] + ` - (${item[objectDefinition._id]})`,
        }));
        return await modifiedStructure;
    }
    async valueFirstStructure(data, objectDefinition) {
        const modifiedStructure = data.map((item) => ({
            _id: item[objectDefinition._id],
            name: item[objectDefinition._id] + ` - (${item[objectDefinition.name]})`,
        }));
        return await modifiedStructure;
    }
}
exports.DropdownConverterService = DropdownConverterService;
//# sourceMappingURL=dropdown-converter.service.js.map