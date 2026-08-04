import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  Workout,
  WorkoutDocument,
} from './schemas/workout';
import { CreateWorkoutDto } from './dto/create-workout.dto';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectModel(Workout.name)
    private readonly workoutModel: Model<WorkoutDocument>,
  ) {}

  async create(userId: string, dto: CreateWorkoutDto) {
    console.log('==============================');
    console.log('CREATE WORKOUT');
    console.log('USER ID:', userId);
    console.log('DTO:', dto);

    const workout = new this.workoutModel({
      ...dto,
      userId,
    });

    const savedWorkout = await workout.save();

    console.log('SAVED WORKOUT:');
    console.log(savedWorkout);
    console.log('==============================');

    return savedWorkout;
  }

  async findAll(userId: string) {
    const workouts = await this.workoutModel.find({
      userId,
    });

    console.log('FIND ALL WORKOUTS');
    console.log('USER ID:', userId);
    console.log('COUNT:', workouts.length);

    return workouts;
  }

  async findOne(id: string, userId: string) {
    const workout = await this.workoutModel.findOne({
      _id: id,
      userId,
    });

    if (!workout) {
      throw new NotFoundException(
        'Workout not found',
      );
    }

    return workout;
  }

  async update(
    id: string,
    userId: string,
    dto: CreateWorkoutDto,
  ) {
    const workout =
      await this.workoutModel.findOneAndUpdate(
        {
          _id: id,
          userId,
        },
        dto,
        {
          new: true,
        },
      );

    if (!workout) {
      throw new NotFoundException(
        'Workout not found',
      );
    }

    return workout;
  }

  async remove(id: string, userId: string) {
    const workout =
      await this.workoutModel.findOneAndDelete({
        _id: id,
        userId,
      });

    if (!workout) {
      throw new NotFoundException(
        'Workout not found',
      );
    }

    return {
      message:
        'Workout deleted successfully',
    };
  }
}