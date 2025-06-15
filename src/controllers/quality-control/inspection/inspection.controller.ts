import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { InspectionService } from './inspection.service';
import { StartInspectionDto } from './dto/start-inspection.dto';
import { ObservedValuesDto } from './dto/update-obsereds.dto';
import { GetUser } from 'src/config/decorators/user.decorator';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { Pagination } from 'src/config/decorators/pagination.decorator';
import { FilterObject } from 'src/config/decorators/filter.decorator';
import { InspectionDto } from './dto/inspection.dto';
import { StartingConfDto } from './dto/starting-conf.dto';
import { SampleDto } from './dto/sample.dto';
import { StartingObserverDto } from './dto/starting-observer.dto';

@Controller('inspection')
export class InspectionController {
  constructor(private inspectionService: InspectionService) {}

  //!--> Get inspection list
  @HttpCode(200)
  @Post('all')
  async getParameters(
    @Pagination() pagination: PaginationStructure,
    @FilterObject() dto: InspectionDto,
  ) {
    return await this.inspectionService.gerPendingInspections(dto, pagination);
  }

  //!--> Get starting confs
  @Post('start-conf')
  async getStartConf(@Body() dto: StartingConfDto) {
    return await this.inspectionService.checkingStartingConf(dto);
  }

  //!--> Start Inspection
  @Post('start')
  async startInspection(@Body() dto: StartInspectionDto) {
    return await this.inspectionService.startQcInspection(dto);
  }

  //!--> Start Configurations
  @Post('start-config')
  async checkingItems(@Body() dto: StartingObserverDto) {
    return await this.inspectionService.getCheckingValues(dto);
  }

  //!--> Update observeds
  @Post('update-observeds')
  async updateObserveds(
    @Body() dto: ObservedValuesDto,
    @GetUser() userId: string,
  ) {
    return await this.inspectionService.updateObserveds(dto, userId);
  }

  //!--> Create samples
  @Post('create-samples')
  async createSamples(@Body() dto: SampleDto, @GetUser() userId: string) {
    return await this.inspectionService.createSamples(dto, userId);
  }
}
