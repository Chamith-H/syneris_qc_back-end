import { StageService } from './stage.service';
import { ItemParameterDto } from './dto/item-parameter.dto';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { FilterItemParameterDto } from './dto/item-parameter-filter.dto';
export declare class StageController {
    private stageService;
    constructor(stageService: StageService);
    getItems(): Promise<{
        ItemCode: string;
        ItemName: string;
    }[]>;
    createItemParameter(dto: ItemParameterDto): Promise<{
        message: string;
    }>;
    getParameters(pagination: PaginationStructure, dto: FilterItemParameterDto): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
}
