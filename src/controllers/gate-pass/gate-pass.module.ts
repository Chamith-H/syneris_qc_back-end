import { Module } from '@nestjs/common';
import { GatePassService } from './gate-pass.service';
import { GatePassController } from './gate-pass.controller';
import { SapIntegrationModule } from '../sap-integration/sap-integration.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user-management/user.schema';
import {
  GatePass,
  GatePassSchema,
} from 'src/schemas/gate-pass/gate-pass.schema';
import { UniqueCodeGeneratorService } from 'src/config/services/unique-code-generator/unique-code-generator.service';
import { UtcDateGenerator } from 'src/config/services/utc-date-generator/utc-date.generator';
import { PaginationService } from 'src/config/services/table-pagination/table-pagination.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: GatePass.name, schema: GatePassSchema },
    ]),

    SapIntegrationModule,
  ],
  providers: [
    GatePassService,
    UniqueCodeGeneratorService,
    UtcDateGenerator,
    PaginationService,
  ],
  controllers: [GatePassController],
})
export class GatePassModule {}
