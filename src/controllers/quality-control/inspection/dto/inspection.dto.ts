import { IsNotEmpty } from 'class-validator';

export class InspectionDto {
  @IsNotEmpty()
  stage: string;

  @IsNotEmpty()
  baseDoc: string;

  @IsNotEmpty()
  itemCode: any;

  @IsNotEmpty()
  approval: number;
}
