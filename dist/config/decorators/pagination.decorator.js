"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const common_1 = require("@nestjs/common");
exports.Pagination = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const page = parseInt(request.query.page);
    const pageSize = 10;
    const paginationData = {
        page,
        limit: pageSize,
        offset: (page - 1) * pageSize,
    };
    return paginationData;
});
//# sourceMappingURL=pagination.decorator.js.map