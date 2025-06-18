import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class RbacRoleGuard implements CanActivate {
    private requiredPermission;
    constructor(requiredPermission: number);
    canActivate(context: ExecutionContext): boolean;
}
