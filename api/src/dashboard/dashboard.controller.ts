import {
  Controller,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
@UseGuards(JwtAuthGuard)
export class DashboardController {
  constructor(
    private readonly dashboardService: DashboardService,
  ) {}

  @Get()
  getDashboard(@Req() req: any) {
    return this.dashboardService.getDashboard(
      req.user.userId,
    );
  }

  @Get('charts')
  getCharts(@Req() req: any) {
    return this.dashboardService.getCharts(
      req.user.userId,
    );
  }

  @Get('strength')
  getStrength(@Req() req: any) {
    return this.dashboardService.getStrength(
      req.user.userId,
    );
  }

  @Get('streak')
  getStreak(@Req() req: any) {
    return this.dashboardService.getStreak(
      req.user.userId,
    );
  }

  @Get('analytics/weekly')
getWeeklyAnalytics(@Req() req: any) {
  return this.dashboardService.getWeeklyAnalytics(
    req.user.userId,
  );
}

@Get('analytics/monthly')
getMonthlyAnalytics(@Req() req: any) {
  return this.dashboardService.getMonthlyAnalytics(
    req.user.userId,
  );
}
}