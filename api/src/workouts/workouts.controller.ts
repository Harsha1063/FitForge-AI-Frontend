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
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';

@Controller('workouts')
@UseGuards(JwtAuthGuard)
export class WorkoutsController {
  constructor(
    private readonly workoutsService: WorkoutsService,
  ) {}

  @Post()
  create(
    @Req() req: any,
    @Body() dto: CreateWorkoutDto,
  ) {
    return this.workoutsService.create(req.user.userId, dto);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.workoutsService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Req() req: any,
  ) {
    return this.workoutsService.findOne(
      id,
      req.user.userId,
    );
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Req() req: any,
    @Body() dto: CreateWorkoutDto,
  ) {
    return this.workoutsService.update(
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
    return this.workoutsService.remove(
      id,
      req.user.userId,
    );
  }
}