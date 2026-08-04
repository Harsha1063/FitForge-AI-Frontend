import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard';

import { AiService } from './ai.service';
import { GenerateWorkoutDto } from './dto/generate-workout.dto';
import { GenerateDietDto } from './dto/generate-diet.dto';
import { ChatDto } from './dto/chat.dto';

@Controller('ai')
@UseGuards(JwtAuthGuard)
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('workout')
  generateWorkout(@Body() dto: GenerateWorkoutDto) {
    return this.aiService.generateWorkout(dto);
  }

  @Post('diet')
  generateDiet(@Body() dto: GenerateDietDto) {
    return this.aiService.generateDiet(dto);
  }

  @Post('chat')
  chat(@Body() dto: ChatDto) {
    return this.aiService.chat(dto);
  }

  @Post('analyze')
  analyze(@Request() req: any) {
    return this.aiService.analyze(req.user.userId);
  }
}