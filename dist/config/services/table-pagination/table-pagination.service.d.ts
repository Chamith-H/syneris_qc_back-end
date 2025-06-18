import { TablePaginationInterface } from './table-pagination.interface';
export declare class PaginationService {
    render_toPAGE(pagingModel: TablePaginationInterface): Promise<{
        data: any[];
        dataCount: any;
        pageCount: number;
        currentPage: number;
    }>;
}
