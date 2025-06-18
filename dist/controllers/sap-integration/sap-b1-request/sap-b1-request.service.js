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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SapB1RequestService = void 0;
const common_1 = require("@nestjs/common");
const b1_api_service_1 = require("../config/b1-api.service");
let SapB1RequestService = class SapB1RequestService {
    constructor(b1ApiService) {
        this.b1ApiService = b1ApiService;
    }
    async getItems(limit, skip, page, filter, counter) {
        const paginationEndpoint = {
            path: 'Items',
            datalogic: ` & $select=ItemCode,ItemName,ItemType,InventoryItem,PurchaseItem,SalesItem,ItemsGroupCode,UoMGroupEntry,GLMethod,CostAccountingMethod,PlanningSystem,ProcurementMethod,IssueMethod & $orderby=CreateDate desc` +
                filter,
            counterlogic: counter,
            limit: limit,
            skip: skip,
            page: page,
        };
        return await this.b1ApiService.pagination_GET(paginationEndpoint);
    }
    async createItem(data) {
        const endpoint = {
            path: 'Items',
            body: data,
        };
        return await this.b1ApiService.request_POST(endpoint);
    }
    async updateItem(id, data) {
        const endpoint = {
            id: id,
            path: 'Items',
            body: data,
        };
        return await this.b1ApiService.request_PATCH(endpoint);
    }
    async getPOs(limit, skip, page, filter, counter) {
        const paginationEndpoint = {
            path: 'PurchaseOrders',
            datalogic: ` & $select=DocEntry,DocNum,CardCode,CardName,DocDate,DocumentLines & $orderby=DocDate desc` +
                filter,
            counterlogic: counter,
            limit: limit,
            skip: skip,
            page: page,
        };
        return await this.b1ApiService.pagination_GET(paginationEndpoint);
    }
};
exports.SapB1RequestService = SapB1RequestService;
exports.SapB1RequestService = SapB1RequestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [b1_api_service_1.B1ApiService])
], SapB1RequestService);
//# sourceMappingURL=sap-b1-request.service.js.map