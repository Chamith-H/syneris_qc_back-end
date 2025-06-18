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
exports.RbacRoleGuard = void 0;
const common_1 = require("@nestjs/common");
let RbacRoleGuard = class RbacRoleGuard {
    constructor(requiredPermission) {
        this.requiredPermission = requiredPermission;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (this.requiredPermission === 0) {
            return true;
        }
        if (!user || !user.permissions) {
            throw new common_1.NotAcceptableException('Permissions denied!');
        }
        const hasPermission = user.permissions.some((permission) => permission === this.requiredPermission);
        if (!hasPermission) {
            throw new common_1.NotAcceptableException('Permissions denied!');
        }
        return true;
    }
};
exports.RbacRoleGuard = RbacRoleGuard;
exports.RbacRoleGuard = RbacRoleGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Number])
], RbacRoleGuard);
//# sourceMappingURL=rbac-role.guard.js.map