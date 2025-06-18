import { CreateCheckUniqueStructure, UpdateCheckUniqueStructure } from './uniqueness-checker.interface';
export declare class CheckUniquenessService {
    compare_forCREATE(checkUniqueModel: CreateCheckUniqueStructure): Promise<void>;
    compare_forUPDATE(checkUniqueModel: UpdateCheckUniqueStructure): Promise<void>;
}
