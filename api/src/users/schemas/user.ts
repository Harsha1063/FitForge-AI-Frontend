import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  name?: string;

  @Prop({ required: true, unique: true })
  email?: string;

  @Prop({ required: true })
  password?: string;

  @Prop({ default: 18 })
  age?: number;

  @Prop({ default: 'Male' })
  gender?: string;

  @Prop({ default: 170 })
  height?: number;

  @Prop({ default: 70 })
  weight?: number;

  @Prop({ default: 'Muscle Gain' })
  goal?: string;

  @Prop({ default: 'Beginner' })
  fitnessLevel?: string;

  @Prop({ default: 'Moderately Active' })
  activityLevel?: string;

  @Prop({ default: 70 })
  targetWeight?: number;

  @Prop({ default: 2200 })
  dailyCalories?: number;

  @Prop({ default: '' })
  profileImage?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);