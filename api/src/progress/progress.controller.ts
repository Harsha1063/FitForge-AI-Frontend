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
import { CreateProgressDto } from './dto/create-progress.dto';
import { ProgressService } from './progress.service';

@Controller('progress')
@UseGuards(JwtAuthGuard)
export class ProgressController {
  constructor(
    private readonly progressService: ProgressService,
  ) {}

  @Post()
  create(
    @Req() req: any,
    @Body() dto: CreateProgressDto,
  ) {
    return this.progressService.create(
      req.user.userId,
      dto,
    );
  }

  @Get()
  findAll(@Req() req: any) {
    return this.progressService.findAll(
      req.user.userId,
    );
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Req() req: any,
  ) {
    return this.progressService.findOne(
      id,
      req.user.userId,
    );
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Req() req: any,
    @Body() dto: CreateProgressDto,
  ) {
    return this.progressService.update(
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
    return this.progressService.remove(
      id,
      req.user.userId,
    );
  }
}