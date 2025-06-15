import { Module } from '@nestjs/common';
import { ItemService } from './item/item.service';
import { ItemController } from './item/item.controller';
import { SapIntegrationModule } from '../sap-integration/sap-integration.module';

@Module({
  imports: [SapIntegrationModule],
  providers: [ItemService],
  controllers: [ItemController],
})
export class MasterDataModule {}
