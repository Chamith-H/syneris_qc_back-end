import { DropdownConverterInterface } from './dropdown-converter.interface';
export declare class DropdownConverterService {
    defaultStructure(data: any[], objectDefinition: DropdownConverterInterface): Promise<{
        _id: any;
        name: any;
    }[]>;
    nameFirstStructure(data: any[], objectDefinition: DropdownConverterInterface): Promise<{
        _id: any;
        name: string;
    }[]>;
    valueFirstStructure(data: any[], objectDefinition: DropdownConverterInterface): Promise<{
        _id: any;
        name: string;
    }[]>;
}
