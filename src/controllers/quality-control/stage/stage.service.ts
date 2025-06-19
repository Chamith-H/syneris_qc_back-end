import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationService } from 'src/config/services/table-pagination/table-pagination.service';
import { UniqueCodeGeneratorService } from 'src/config/services/unique-code-generator/unique-code-generator.service';
import { CheckUniquenessService } from 'src/config/services/uniqueness-checker/uniqueness-checker.service';
import { UtcDateGenerator } from 'src/config/services/utc-date-generator/utc-date.generator';
import {
  Stage,
  StageDocument,
} from 'src/schemas/quality-control/stage/stage.schema';
import { ItemParameterDto } from './dto/item-parameter.dto';
import { FilterItemParameterDto } from './dto/item-parameter-filter.dto';
import { PaginationStructure } from 'src/config/interfaces/pagination.structure';
import { TablePaginationInterface } from 'src/config/services/table-pagination/table-pagination.interface';
import {
  StageHead,
  StageHeadDocument,
} from 'src/schemas/quality-control/stage/stage-head.schema';

@Injectable()
export class StageService {
  items = [
    {
      ItemCode: 'AI-SHF-001',
      ItemName: 'Item 1',
    },
    {
      ItemCode: 'AI-SHF-002',
      ItemName: 'Item 2',
    },
    {
      ItemCode: 'AI-SHF-003',
      ItemName: 'Item 3',
    },
    {
      ItemCode: 'AI-SHF-004',
      ItemName: 'Item 4',
    },
    {
      ItemCode: 'AI-SHF-005',
      ItemName: 'Item 5',
    },
    {
      ItemCode: 'AI-SHF-006',
      ItemName: 'Item 6',
    },
    {
      ItemCode: 'AI-SHF-007',
      ItemName: 'Item 7',
    },
    {
      ItemCode: 'AI-SHF-008',
      ItemName: 'Item 8',
    },
    {
      ItemCode: 'AI-SHF-009',
      ItemName: 'Item 9',
    },
    {
      ItemCode: 'AI-SHF-010',
      ItemName: 'Item 10',
    },
  ];

  constructor(
    @InjectModel(Stage.name)
    private readonly stageModel: Model<StageDocument>,
    @InjectModel(StageHead.name)
    private readonly stageHeadModel: Model<StageHeadDocument>,

    private readonly uniqueCodeGenetatorService: UniqueCodeGeneratorService,
    private readonly dateCreaterService: UtcDateGenerator,
    private readonly paginationService: PaginationService,
    private readonly checkUniquenessService: CheckUniquenessService,
  ) {}

  //!--> Get stage items
  async getItems() {
    return await this.items;
  }

  //!--> Create Item parameter
  async createItemParameter(dto: ItemParameterDto) {
    const newStageHead: StageHead = {
      stageName: dto.stage,
      itemCode: dto.itemCode,
      method: dto.method,
      sampleCount: parseInt(dto.sampleCount),
    };

    const stageHeadDoc = new this.stageHeadModel(newStageHead);
    const s_response = await stageHeadDoc.save();

    if (s_response) {
      const parameterMapper = await Promise.all(
        dto.parameterLines.map(async (parameter: any) => {
          const newStage: Stage = {
            stageName: dto.stage,
            itemCode: dto.itemCode,
            parameter: parameter.parameterId,
            mandatory: parameter.mandatory,
            minValue: parameter.minValue,
            maxValue: parameter.maxValue,
            stdValue: parameter.stdValue,
            status: parameter.status,
          };

          const stageDoc = new this.stageModel(newStage);
          return await stageDoc.save();
        }),
      );

      if (parameterMapper) {
        return { message: 'QC parameter relation created successfully!' };
      }
    }
  }

  //!--> Get Item parameters
  async getItemParameters(
    dto: FilterItemParameterDto,
    pagination: PaginationStructure,
  ) {
    if (dto.itemCode) {
      const regex = new RegExp(dto.itemCode, 'i');
      dto.itemCode = regex;
    }

    const list = await this.stageHeadModel
      .find(dto)
      .skip(pagination.offset)
      .limit(pagination.limit);

    const currentPage: TablePaginationInterface = {
      data: list,
      model: this.stageHeadModel,
      query: dto,
      currentPage: pagination.page,
      dataLimit: pagination.limit,
    };

    return await this.paginationService.render_toPAGE(currentPage);
  }
}
