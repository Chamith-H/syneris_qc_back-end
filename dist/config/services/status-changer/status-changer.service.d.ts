import { StatusChangerInterface } from './status-changer.interface';
export declare class statusChangerService {
    changeStatus(changeStatusModel: StatusChangerInterface): Promise<{
        message: string;
    }>;
}
