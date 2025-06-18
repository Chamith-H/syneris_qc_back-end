"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Access = void 0;
const common_1 = require("@nestjs/common");
const rbac_role_guard_1 = require("../guards/rbac-role.guard");
const Access = (permission) => {
    return (0, common_1.UseGuards)(new rbac_role_guard_1.RbacRoleGuard(permission));
};
exports.Access = Access;
//# sourceMappingURL=access.decorator.js.map