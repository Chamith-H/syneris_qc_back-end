import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SapTestDocument = SapTest & Document;

@Schema()
export class SapTest {
  @Prop()
  DocNum: number;

  @Prop()
  ItemCode: string;

  @Prop()
  Line: number;

  @Prop()
  CreationDate: string;

  @Prop()
  U_Approval: string;

  @Prop()
  U_Rejection: string;

  @Prop()
  U_Cancellation: string;

  @Prop()
  U_Round: number;
}

export const SapTestSchema = SchemaFactory.createForClass(SapTest);
