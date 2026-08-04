import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Nutrition, NutritionDocument } from './schemas/nutrition';
import { CreateNutritionDto } from './dto/create-nutrition.dto';

@Injectable()
export class NutritionService {
  constructor(
    @InjectModel(Nutrition.name)
    private readonly nutritionModel: Model<NutritionDocument>,
  ) {}

  async create(userId: string, dto: CreateNutritionDto) {
    const nutrition = new this.nutritionModel({
      ...dto,
      userId,
    });

    return nutrition.save();
  }

  async findAll(userId: string) {
    return this.nutritionModel.find({ userId }).sort({ date: -1 });
  }

  async findOne(id: string, userId: string) {
    const nutrition = await this.nutritionModel.findOne({
      _id: id,
      userId,
    });

    if (!nutrition) {
      throw new NotFoundException('Nutrition record not found');
    }

    return nutrition;
  }

  async update(
    id: string,
    userId: string,
    dto: CreateNutritionDto,
  ) {
    const nutrition = await this.nutritionModel.findOneAndUpdate(
      {
        _id: id,
        userId,
      },
      dto,
      {
        new: true,
      },
    );

    if (!nutrition) {
      throw new NotFoundException('Nutrition record not found');
    }

    return nutrition;
  }

  async remove(id: string, userId: string) {
    const nutrition = await this.nutritionModel.findOneAndDelete({
      _id: id,
      userId,
    });

    if (!nutrition) {
      throw new NotFoundException('Nutrition record not found');
    }

    return {
      message: 'Nutrition record deleted successfully',
    };
  }
}