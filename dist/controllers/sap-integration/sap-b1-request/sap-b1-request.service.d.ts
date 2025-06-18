import { B1ApiService } from '../config/b1-api.service';
export declare class SapB1RequestService {
    private readonly b1ApiService;
    constructor(b1ApiService: B1ApiService);
    getItems(limit: number, skip: number, page: number, filter: string, counter: string): Promise<{
        data: any[];
        dataCount: number;
        pageCount: number;
        currentPage: number;
    }>;
    createItem(data: any): Promise<any>;
    updateItem(id: string, data: any): Promise<any>;
    getPOs(limit: number, skip: number, page: number, filter: string, counter: string): Promise<{
        data: any[];
        dataCount: number;
        pageCount: number;
        currentPage: number;
    }>;
}
