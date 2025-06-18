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
exports.WarehouseTestSchema = exports.WarehouseTest = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let WarehouseTest = class WarehouseTest {
};
exports.WarehouseTest = WarehouseTest;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WarehouseTest.prototype, "WarehouseName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WarehouseTest.prototype, "WarehouseCode", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WarehouseTest.prototype, "U_RejectWH", void 0);
exports.WarehouseTest = WarehouseTest = __decorate([
    (0, mongoose_1.Schema)()
], WarehouseTest);
exports.WarehouseTestSchema = mongoose_1.SchemaFactory.createForClass(WarehouseTest);
//# sourceMappingURL=warehouse-test.schema.js.map