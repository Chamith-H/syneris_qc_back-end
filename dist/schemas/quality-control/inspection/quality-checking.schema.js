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
exports.QualityCheckingSchema = exports.QualityChecking = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let QualityChecking = class QualityChecking {
};
exports.QualityChecking = QualityChecking;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], QualityChecking.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], QualityChecking.prototype, "sampleNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], QualityChecking.prototype, "stageName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], QualityChecking.prototype, "docNum", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], QualityChecking.prototype, "itemCode", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], QualityChecking.prototype, "round", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, ref: 'Stage' }),
    __metadata("design:type", Object)
], QualityChecking.prototype, "stage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, ref: 'QcParameter' }),
    __metadata("design:type", Object)
], QualityChecking.prototype, "parameter", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], QualityChecking.prototype, "observedValue", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], QualityChecking.prototype, "inspectedDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, ref: 'User' }),
    __metadata("design:type", Object)
], QualityChecking.prototype, "inspectedBy", void 0);
exports.QualityChecking = QualityChecking = __decorate([
    (0, mongoose_1.Schema)()
], QualityChecking);
exports.QualityCheckingSchema = mongoose_1.SchemaFactory.createForClass(QualityChecking);
//# sourceMappingURL=quality-checking.schema.js.map