import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Budget extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  limit: number;

  @Prop({ required: true })
  month: string; // format: YYYY-MM

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const BudgetSchema = SchemaFactory.createForClass(Budget);
