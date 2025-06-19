import { IsNotEmpty } from 'class-validator';

export class InspectionDto {
  @IsNotEmpty()
  stage: string;

  @IsNotEmpty()
  DocNum: any;

  @IsNotEmpty()
  ItemCode: any;

  @IsNotEmpty()
  U_Approval: any;
}
