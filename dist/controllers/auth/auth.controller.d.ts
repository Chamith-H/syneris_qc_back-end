import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { GetOtpDto } from './dto/get-otp.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: loginDto): Promise<{
        jwtToken: string;
        userData: string;
        accessNumbers: string;
    }>;
    accessRoute(): Promise<boolean>;
    getOtp(dto: GetOtpDto): Promise<{
        userId: any;
        userName: string;
        role: any;
        email: string;
        profileImage: string;
    }>;
    resetPassword(dto: ResetPasswordDto): Promise<{
        message: string;
    }>;
}
