import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChangedPermissionInterface } from './hidden-action/interfaces/changed-permissions.interface';
import { ChangedRoleInterface } from './hidden-action/interfaces/changed-role.interface';
import { ChangedUserInterface } from './hidden-action/interfaces/changed-user.interface';
export declare class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    refreshUser(dto: ChangedUserInterface): void;
    refreshRole(dto: ChangedRoleInterface): void;
    refreshPermissions(dto: ChangedPermissionInterface): void;
}
