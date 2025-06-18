import { AuthService } from '../auth.service';
import { JwtPayload } from './jwt.payload';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(payload: JwtPayload): Promise<import("src/controllers/auth/dto/validated-user.dto").ValidatedUserDto>;
}
export {};
