export declare class EmailTemplateService {
    register_userPassword(name: string, username: string, password: string): Promise<string>;
    send_otpCode(name: string, otp: string): Promise<string>;
    send_newPassword(name: string, username: string, password: string): Promise<string>;
}
