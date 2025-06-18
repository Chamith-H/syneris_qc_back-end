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
exports.SapTestSchema = exports.SapTest = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let SapTest = class SapTest {
};
exports.SapTest = SapTest;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], SapTest.prototype, "DocNum", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SapTest.prototype, "ItemCode", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], SapTest.prototype, "Line", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SapTest.prototype, "CreationDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SapTest.prototype, "U_Approval", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, ref: 'User' }),
    __metadata("design:type", Object)
], SapTest.prototype, "U_ActionedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SapTest.prototype, "U_ActionedNote", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], SapTest.prototype, "U_ActionedDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SapTest.prototype, "U_ActionedWarehouse", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], SapTest.prototype, "U_Round", void 0);
exports.SapTest = SapTest = __decorate([
    (0, mongoose_1.Schema)()
], SapTest);
exports.SapTestSchema = mongoose_1.SchemaFactory.createForClass(SapTest);
//# sourceMappingURL=sap-test.schema.js.map