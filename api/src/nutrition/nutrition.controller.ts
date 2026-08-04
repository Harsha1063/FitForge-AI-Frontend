import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard';
import { CreateNutritionDto } from './dto/create-nutrition.dto';
import { NutritionService } from './nutrition.service';

@Controller('nutrition')
@UseGuards(JwtAuthGuard)
export class NutritionController {
  constructor(
    private readonly nutritionService: NutritionService,
  ) {}

  @Post()
  create(
    @Req() req: any,
    @Body() dto: CreateNutritionDto,
  ) {
    return this.nutritionService.create(
      req.user.userId,
      dto,
    );
  }

  @Get()
  findAll(@Req() req: any) {
    return this.nutritionService.findAll(
      req.user.userId,
    );
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Req() req: any,
  ) {
    return this.nutritionService.findOne(
      id,
      req.user.userId,
    );
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Req() req: any,
    @Body() dto: CreateNutritionDto,
  ) {
    return this.nutritionService.update(
      id,
      req.user.userId,
      dto,
    );
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Req() req: any,
  ) {
    return this.nutritionService.remove(
      id,
      req.user.userId,
    );
  }
}