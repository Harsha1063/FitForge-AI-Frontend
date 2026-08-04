import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type NutritionDocument = Nutrition & Document;

@Schema({ timestamps: true })
export class Nutrition {
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  userId!: Types.ObjectId;

  @Prop({ required: true })
  date!: Date;

  @Prop({ required: true })
  mealType!: string;

  @Prop({ required: true })
  mealName!: string;

  @Prop({ required: true })
  calories!: number;

  @Prop({ default: 0 })
  protein!: number;

  @Prop({ default: 0 })
  carbs!: number;

  @Prop({ default: 0 })
  fats!: number;

  @Prop({ default: 0 })
  water!: number;

  @Prop()
  notes?: string;
}

export const NutritionSchema =
  SchemaFactory.createForClass(Nutrition);