import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { NutritionController } from './nutrition.controller';
import { NutritionService } from './nutrition.service';
import { Nutrition, NutritionSchema } from './schemas/nutrition';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Nutrition.name,
        schema: NutritionSchema,
      },
    ]),
  ],
  controllers: [NutritionController],
  providers: [NutritionService],
  exports: [NutritionService],
})
export class NutritionModule {}