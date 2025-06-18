import { UniqueCodeGeneratorInterface } from './unique-code-generator.interface';
export declare class UniqueCodeGeneratorService {
    create_newUniqueCode(uniqueCodeModel: UniqueCodeGeneratorInterface): Promise<{
        requestNumber: number;
        requestId: string;
    }>;
    generate_NewId(reqNumber: number, prefixStr: string): {
        requestNumber: number;
        requestId: string;
    };
}
