import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type WorkoutDocument = Workout & Document;

@Schema({ _id: false })
class Exercise {
  @Prop({ required: true })
  exerciseName!: string;

  @Prop({ required: true })
  sets!: number;

  @Prop({ required: true })
  reps!: number;

  @Prop({ required: true })
  weight!: number;
}

@Schema({ timestamps: true })
export class Workout {
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  userId!: Types.ObjectId;

  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  day!: string;

  @Prop({
    type: [SchemaFactory.createForClass(Exercise)],
    default: [],
  })
  exercises!: Exercise[];
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);