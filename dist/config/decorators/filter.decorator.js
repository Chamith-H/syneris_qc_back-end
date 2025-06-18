"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterObject = void 0;
const common_1 = require("@nestjs/common");
exports.FilterObject = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const dto = request.body;
    for (let key in dto) {
        if (dto[key] === '' || dto[key] === undefined || dto[key] === null) {
            delete dto[key];
        }
        if (dto[key] === 'true') {
            dto[key] = true;
        }
        if (dto[key] === 'false') {
            dto[key] = false;
        }
    }
    return dto;
});
//# sourceMappingURL=filter.decorator.js.map