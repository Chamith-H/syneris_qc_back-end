import { EmailSenderInterface } from './email-sender.interface';
export declare class EmailSenderService {
    private transporter;
    constructor();
    sendEmail(bodyData: EmailSenderInterface): Promise<any>;
}
