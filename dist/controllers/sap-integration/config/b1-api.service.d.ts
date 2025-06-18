import { GetRequestStructure } from './interfaces/get-request.interface';
import { PostRequestStructure } from './interfaces/post-request.interface';
import { B1SessionService } from './b1-session.service';
import { PaginationRequestStructure } from './interfaces/pagination-request.interface';
import { PatchRequestStructure } from './interfaces/patch-request.interface';
export declare class B1ApiService {
    private b1SessionService;
    constructor(b1SessionService: B1SessionService);
    request_GET(requestOptions: GetRequestStructure): Promise<any>;
    request_POST(requestOptions: PostRequestStructure): Promise<any>;
    request_PATCH(requestOptions: PatchRequestStructure): Promise<any>;
    counting_GET(requestOptions: GetRequestStructure): Promise<any>;
    pagination_GET(requestOptions: PaginationRequestStructure): Promise<{
        data: any[];
        dataCount: number;
        pageCount: number;
        currentPage: number;
    }>;
}
