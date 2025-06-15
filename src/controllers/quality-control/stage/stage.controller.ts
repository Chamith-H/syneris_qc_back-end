import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { StageService } from './stage.service';
import { ItemParameterDto } from './dto/item-parameter.dto';
import { Pagination } from 'src/config/decorators/pagination.decorator';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { FilterObject } from 'src/config/decorators/filter.decorator';
import { FilterItemParameterDto } from './dto/item-parameter-filter.dto';

@Controller('stage')
export class StageController {
  constructor(private stageService: StageService) {}

  //!--> Get items
  @Get('items')
  async getItems() {
    return await this.stageService.getItems();
  }

  //!--> Create item parameter
  @Post('create')
  async createItemParameter(@Body() dto: ItemParameterDto) {
    return await this.stageService.createItemParameter(dto);
  }

  //!--> Paginate Parameters
  @HttpCode(200)
  @Post('all')
  async getParameters(
    @Pagination() pagination: PaginationStructure,
    @FilterObject() dto: FilterItemParameterDto,
  ) {
    return await this.stageService.getItemParameters(dto, pagination);
  }
}
