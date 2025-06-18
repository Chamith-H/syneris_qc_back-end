"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bPermissions = void 0;
var bPermissions;
(function (bPermissions) {
    bPermissions[bPermissions["VIEW_USERS_LIST"] = 1] = "VIEW_USERS_LIST";
    bPermissions[bPermissions["ADD_USER"] = 2] = "ADD_USER";
    bPermissions[bPermissions["EDIT_USER"] = 3] = "EDIT_USER";
    bPermissions[bPermissions["CHANGE_USER_STATUS"] = 5] = "CHANGE_USER_STATUS";
    bPermissions[bPermissions["DETAIL_USER"] = 4] = "DETAIL_USER";
    bPermissions[bPermissions["DELETE_USER"] = 6] = "DELETE_USER";
    bPermissions[bPermissions["VIEW_ROLES_LIST"] = 11] = "VIEW_ROLES_LIST";
    bPermissions[bPermissions["ADD_ROLE"] = 12] = "ADD_ROLE";
    bPermissions[bPermissions["EDIT_ROLE"] = 13] = "EDIT_ROLE";
    bPermissions[bPermissions["DELETE_ROLE"] = 14] = "DELETE_ROLE";
    bPermissions[bPermissions["CHANGE_ROLE_STATUS"] = 15] = "CHANGE_ROLE_STATUS";
    bPermissions[bPermissions["DETAIL_ROLE"] = 16] = "DETAIL_ROLE";
    bPermissions[bPermissions["VIEW_PERMISSION_LIST"] = 21] = "VIEW_PERMISSION_LIST";
    bPermissions[bPermissions["MANAGE_PERMISSIONS"] = 22] = "MANAGE_PERMISSIONS";
})(bPermissions || (exports.bPermissions = bPermissions = {}));
//# sourceMappingURL=permission.enum.js.map