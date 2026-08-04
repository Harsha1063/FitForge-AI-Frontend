import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Progress, ProgressDocument } from './schemas/progress';
import { CreateProgressDto } from './dto/create-progress.dto';

@Injectable()
export class ProgressService {
  constructor(
    @InjectModel(Progress.name)
    private readonly progressModel: Model<ProgressDocument>,
  ) {}

  async create(userId: string, dto: CreateProgressDto) {
    const progress = new this.progressModel({
      ...dto,
      userId,
    });

    return progress.save();
  }

  async findAll(userId: string) {
    return this.progressModel
      .find({ userId })
      .sort({ date: -1 });
  }

  async findOne(id: string, userId: string) {
    const progress = await this.progressModel.findOne({
      _id: id,
      userId,
    });

    if (!progress) {
      throw new NotFoundException(
        'Progress record not found',
      );
    }

    return progress;
  }

  async update(
    id: string,
    userId: string,
    dto: CreateProgressDto,
  ) {
    const progress =
      await this.progressModel.findOneAndUpdate(
        {
          _id: id,
          userId,
        },
        dto,
        {
          new: true,
        },
      );

    if (!progress) {
      throw new NotFoundException(
        'Progress record not found',
      );
    }

    return progress;
  }

  async remove(id: string, userId: string) {
    const progress =
      await this.progressModel.findOneAndDelete({
        _id: id,
        userId,
      });

    if (!progress) {
      throw new NotFoundException(
        'Progress record not found',
      );
    }

    return {
      message:
        'Progress record deleted successfully',
    };
  }
}