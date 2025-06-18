import { SapMasterService } from './sap-master.service';
import { MasterItemsDto } from './dto/master-items.dto';
export declare class SapMasterController {
    private readonly sapMsterService;
    constructor(sapMsterService: SapMasterService);
    getMasterDataForItems(): Promise<{
        itemGroups: any[];
        uomGroups: any[];
        numberSeqs: any[];
    }>;
    getActualData(dto: MasterItemsDto): Promise<MasterItemsDto>;
}
