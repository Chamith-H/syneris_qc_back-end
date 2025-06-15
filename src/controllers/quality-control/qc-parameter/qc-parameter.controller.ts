import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { QcParameterService } from './qc-parameter.service';
import { UomDto } from './dto/uom.dto';
import { Pagination } from 'src/config/decorators/pagination.decorator';
import { FilterObject } from 'src/config/decorators/filter.decorator';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { FilterUomDto } from './dto/uom-filter.dto';
import { QcParameterDto } from './dto/qc-parameter.dto';
import { FilterQcParameterDto } from './dto/qc-parameter-filter.dto';

@Controller('qc-parameter')
export class QcParameterController {
  constructor(private readonly qcParameterService: QcParameterService) {}

  //!--> Create UOM
  @Post('create-uom')
  async createUom(@Body() dto: UomDto) {
    return await this.qcParameterService.createUOM(dto);
  }

  //!--> Paginate Uom
  @HttpCode(200)
  @Post('all-uom')
  async getUomss(
    @Pagination() pagination: PaginationStructure,
    @FilterObject() dto: FilterUomDto,
  ) {
    return await this.qcParameterService.getUoms(dto, pagination);
  }

  //!--> Create Equipment
  @Post('create-equipment')
  async createEquipment(@Body() dto: UomDto) {
    return await this.qcParameterService.createEquipment(dto);
  }

  //!--> Paginate Equipment
  @HttpCode(200)
  @Post('all-equipment')
  async getEquipments(
    @Pagination() pagination: PaginationStructure,
    @FilterObject() dto: FilterUomDto,
  ) {
    return await this.qcParameterService.getEquipments(dto, pagination);
  }

  //!--> Uom Dropdown
  @Get('uom-dropdown')
  async getUomDropdown() {
    return await this.qcParameterService.uomDropdown();
  }

  //!--> Equipment dropdown
  @Get('equipment-dropdown')
  async getEquipmentDropdown() {
    return await this.qcParameterService.equipmentDropdown();
  }

  //!--> Create QC parameter
  @Post('create-parameter')
  async createParameter(@Body() dto: QcParameterDto) {
    return await this.qcParameterService.createQcParameter(dto);
  }

  //!--> Paginate Parameters
  @HttpCode(200)
  @Post('all-parameters')
  async getParameters(
    @Pagination() pagination: PaginationStructure,
    @FilterObject() dto: FilterQcParameterDto,
  ) {
    return await this.qcParameterService.getQcParameters(dto, pagination);
  }

  //!--> Parameter dropdown
  @Get('parameter-dropdown')
  async getParameterDropdown() {
    return await this.qcParameterService.getParameterDropdown();
  }
}
