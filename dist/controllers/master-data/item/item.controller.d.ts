import { ItemService } from './item.service';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { FilterItemDto } from './dto/filter-item.dto';
import { ItemDto } from './dto/item.dto';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    getItemData(pagination: PaginationStructure, dto: FilterItemDto): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
    createItem(dto: ItemDto): Promise<{
        message: string;
    }>;
    updateItem(dto: ItemDto): Promise<{
        message: string;
    }>;
}
