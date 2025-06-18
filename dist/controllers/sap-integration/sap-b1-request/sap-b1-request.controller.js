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
exports.SapB1RequestController = void 0;
const common_1 = require("@nestjs/common");
const sap_b1_request_service_1 = require("./sap-b1-request.service");
let SapB1RequestController = class SapB1RequestController {
    constructor(sapB1RequestService) {
        this.sapB1RequestService = sapB1RequestService;
    }
};
exports.SapB1RequestController = SapB1RequestController;
exports.SapB1RequestController = SapB1RequestController = __decorate([
    (0, common_1.Controller)('sap-b1-request'),
    __metadata("design:paramtypes", [sap_b1_request_service_1.SapB1RequestService])
], SapB1RequestController);
//# sourceMappingURL=sap-b1-request.controller.js.map