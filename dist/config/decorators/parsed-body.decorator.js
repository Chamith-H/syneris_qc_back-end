"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsedBody = void 0;
const common_1 = require("@nestjs/common");
exports.ParsedBody = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const dto = request.body;
    if (dto && dto.values) {
        return JSON.parse(dto.values);
    }
    return null;
});
//# sourceMappingURL=parsed-body.decorator.js.map