import { EligibleService } from './eligible.service';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { EligibleItemDto } from './dto/eligible-item.dto';
import { EligibleWarehouseDto } from './dto/eligible-warehouse.dto';
import { FilterWarehouseDto } from './dto/filter-warehouse.dto';
export declare class EligibleController {
    private readonly eligibleService;
    constructor(eligibleService: EligibleService);
    getItemData(pagination: PaginationStructure, dto: EligibleItemDto): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    getWarehouseData(pagination: PaginationStructure, dto: EligibleWarehouseDto): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    dropWarehouses(dto: FilterWarehouseDto): Promise<{
        name: string;
        _id: string;
    }[]>;
}
