"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationService = void 0;
class PaginationService {
    async render_toPAGE(pagingModel) {
        const total = await pagingModel.model.countDocuments(pagingModel.query);
        return {
            data: pagingModel.data,
            dataCount: total,
            pageCount: Math.ceil(total / pagingModel.dataLimit),
            currentPage: pagingModel.currentPage,
        };
    }
}
exports.PaginationService = PaginationService;
//# sourceMappingURL=table-pagination.service.js.map