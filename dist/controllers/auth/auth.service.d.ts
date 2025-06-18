/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { UserDocument } from 'src/schemas/user-management/user.schema';
import { JwtPayload } from './jwt/jwt.payload';
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ValidatedUserDto } from './dto/validated-user.dto';
import { AwsS3BucketService } from 'src/config/services/aws-s3-bucket/aws-s3-bucket.service';
import { GetOtpDto } from './dto/get-otp.dto';
import { EmailSenderService } from 'src/config/services/email-sender/email-sender.service';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { EmailTemplateService } from 'src/config/templates/email.template';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    private readonly s3BucketService;
    private readonly emailSenderService;
    private readonly emailTemplateService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService, s3BucketService: AwsS3BucketService, emailSenderService: EmailSenderService, emailTemplateService: EmailTemplateService);
    login(dto: loginDto): Promise<{
        jwtToken: string;
        userData: string;
        accessNumbers: string;
    }>;
    validate(payload: JwtPayload): Promise<ValidatedUserDto>;
    sendOtp(dto: GetOtpDto): Promise<{
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
