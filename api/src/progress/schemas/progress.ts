import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ProgressDocument = Progress & Document;

@Schema({ timestamps: true })
export class Progress {
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  userId!: Types.ObjectId;

  @Prop({ required: true })
  date!: Date;

  @Prop()
  bodyWeight?: number;

  @Prop()
  bodyFat?: number;

  @Prop()
  chest?: number;

  @Prop()
  waist?: number;

  @Prop()
  hips?: number;

  @Prop()
  biceps?: number;

  @Prop()
  thighs?: number;

  @Prop()
  notes?: string;
}

export const ProgressSchema = SchemaFactory.createForClass(Progress);