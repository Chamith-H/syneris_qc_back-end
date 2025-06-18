import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationService } from 'src/config/services/table-pagination/table-pagination.service';
import { UniqueCodeGeneratorService } from 'src/config/services/unique-code-generator/unique-code-generator.service';
import { UtcDateGenerator } from 'src/config/services/utc-date-generator/utc-date.generator';
import {
  Equipment,
  EquipmentDocument,
} from 'src/schemas/quality-control/qc-parameter/equipment.schema';
import {
  QcParameter,
  QcParameterDocument,
} from 'src/schemas/quality-control/qc-parameter/qc-parameter.schema';
import {
  Uom,
  UomDocument,
} from 'src/schemas/quality-control/qc-parameter/uom.schema';
import { UomDto } from './dto/uom.dto';
import { CreateCheckUniqueStructure } from 'src/config/services/uniqueness-checker/uniqueness-checker.interface';
import { CheckUniquenessService } from 'src/config/services/uniqueness-checker/uniqueness-checker.service';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { FilterUomDto } from './dto/uom-filter.dto';
import { TablePaginationInterface } from 'src/config/services/table-pagination/table-pagination.interface';
import { EquipmentDto } from './dto/equipment.dto';
import { FilterEquipmentDto } from './dto/equipment-filter.dto';
import { QcParameterDto } from './dto/qc-parameter.dto';

@Injectable()
export class QcParameterService {
  constructor(
    @InjectModel(Uom.name)
    private readonly uomModel: Model<UomDocument>,

    @InjectModel(Equipment.name)
    private readonly equipmentModel: Model<EquipmentDocument>,

    @InjectModel(QcParameter.name)
    private readonly qcParameterModel: Model<QcParameterDocument>,

    private readonly uniqueCodeGenetatorService: UniqueCodeGeneratorService,
    private readonly dateCreaterService: UtcDateGenerator,
    private readonly paginationService: PaginationService,
    private readonly checkUniquenessService: CheckUniquenessService,
  ) {}

  //!--> Create UOM
  async createUOM(dto: UomDto) {
    try {
      console.log('Hellow');
    } catch (err) {
      console.log(err);
    }
    const checkingObjectCode: CreateCheckUniqueStructure = {
      dataModel: this.uomModel,
      key: 'code',
      value: dto.code,
      error: 'This UOM code has been already created!',
    };

    // Check for creating duplicate data
    await this.checkUniquenessService.compare_forCREATE(checkingObjectCode);

    const checkingObjectName: CreateCheckUniqueStructure = {
      dataModel: this.uomModel,
      key: 'name',
      value: dto.name,
      error: 'This UOM name has been already created!',
    };

    // Check for creating duplicate data
    await this.checkUniquenessService.compare_forCREATE(checkingObjectName);

    const newUom = new this.uomModel(dto);
    const response = await newUom.save();

    if (response) {
      return { message: 'UOM created successfuly!' };
    }
  }

  //!--> Get UOMs
  async getUoms(dto: FilterUomDto, pagination: PaginationStructure) {
    if (dto.code) {
      const regex = new RegExp(dto.code, 'i');
      dto.code = regex;
    }

    if (dto.name) {
      const regex = new RegExp(dto.name, 'i');
      dto.name = regex;
    }

    const list = await this.uomModel
      .find(dto)
      .skip(pagination.offset)
      .limit(pagination.limit);

    const currentPage: TablePaginationInterface = {
      data: list,
      model: this.uomModel,
      query: dto,
      currentPage: pagination.page,
      dataLimit: pagination.limit,
    };

    return await this.paginationService.render_toPAGE(currentPage);
  }

  //!--> Create Equipment
  async createEquipment(dto: EquipmentDto) {
    const checkingObjectCode: CreateCheckUniqueStructure = {
      dataModel: this.equipmentModel,
      key: 'code',
      value: dto.code,
      error: 'This UOM code has been already created!',
    };

    // Check for creating duplicate data
    await this.checkUniquenessService.compare_forCREATE(checkingObjectCode);

    const checkingObjectName: CreateCheckUniqueStructure = {
      dataModel: this.equipmentModel,
      key: 'name',
      value: dto.name,
      error: 'This UOM name has been already created!',
    };

    // Check for creating duplicate data
    await this.checkUniquenessService.compare_forCREATE(checkingObjectName);

    const newUom = new this.equipmentModel(dto);
    const response = await newUom.save();

    if (response) {
      return { message: 'Equipment created successfuly!' };
    }
  }

  //!--> Get Equipments
  async getEquipments(
    dto: FilterEquipmentDto,
    pagination: PaginationStructure,
  ) {
    if (dto.code) {
      const regex = new RegExp(dto.code, 'i');
      dto.code = regex;
    }

    if (dto.name) {
      const regex = new RegExp(dto.name, 'i');
      dto.name = regex;
    }

    const list = await this.equipmentModel
      .find(dto)
      .skip(pagination.offset)
      .limit(pagination.limit);

    const currentPage: TablePaginationInterface = {
      data: list,
      model: this.equipmentModel,
      query: dto,
      currentPage: pagination.page,
      dataLimit: pagination.limit,
    };

    return await this.paginationService.render_toPAGE(currentPage);
  }

  //!--> Get uom dropdown
  async uomDropdown() {
    return await this.uomModel.find({});
  }

  //!--> Get equipment dropdown
  async equipmentDropdown() {
    return await this.equipmentModel.find({});
  }

  //!--> Create QC parameter
  async createQcParameter(dto: QcParameterDto) {
    const checkingObjectCode: CreateCheckUniqueStructure = {
      dataModel: this.qcParameterModel,
      key: 'code',
      value: dto.code,
      error: 'This parameter code has been already created!',
    };

    // Check for creating duplicate data
    await this.checkUniquenessService.compare_forCREATE(checkingObjectCode);

    const checkingObjectName: CreateCheckUniqueStructure = {
      dataModel: this.qcParameterModel,
      key: 'name',
      value: dto.name,
      error: 'This parameter name has been already created!',
    };

    // Check for creating duplicate data
    await this.checkUniquenessService.compare_forCREATE(checkingObjectName);

    const newParameter = new this.qcParameterModel(dto);
    const response = await newParameter.save();

    if (response) {
      return { message: 'QC parameter created successfuly!' };
    }
  }

  //!--> Get QC parameters
  async getQcParameters(dto: FilterUomDto, pagination: PaginationStructure) {
    if (dto.code) {
      const regex = new RegExp(dto.code, 'i');
      dto.code = regex;
    }

    if (dto.name) {
      const regex = new RegExp(dto.name, 'i');
      dto.name = regex;
    }

    const list = await this.qcParameterModel
      .find(dto)
      .populate('uom equipment')
      .skip(pagination.offset)
      .limit(pagination.limit);

    const currentPage: TablePaginationInterface = {
      data: list,
      model: this.qcParameterModel,
      query: dto,
      currentPage: pagination.page,
      dataLimit: pagination.limit,
    };

    return await this.paginationService.render_toPAGE(currentPage);
  }

  //!--> Get parameter dropdown
  async getParameterDropdown() {
    return await this.qcParameterModel.find({});
  }
}
