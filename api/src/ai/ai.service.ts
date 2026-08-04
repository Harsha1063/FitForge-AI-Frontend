import { Injectable } from '@nestjs/common';

import { GroqService } from './groq.service';
import { GenerateWorkoutDto } from './dto/generate-workout.dto';
import { GenerateDietDto } from './dto/generate-diet.dto';
import { ChatDto } from './dto/chat.dto';

import { UsersService } from '../users/users.service';
import { WorkoutsService } from '../workouts/workouts.service';
import { ProgressService } from '../progress/progress.service';
import { NutritionService } from '../nutrition/nutrition.service';
import { MetricsService } from './analytics/metrics.service';
import { FitnessScoreService } from './analytics/fitness-score.service';


@Injectable()
export class AiService {
  constructor(
 private readonly groqService: GroqService,
  private readonly usersService: UsersService,
  private readonly workoutsService: WorkoutsService,
  private readonly progressService: ProgressService,
  private readonly nutritionService: NutritionService,
  private readonly metricsService: MetricsService,
  private readonly fitnessScoreService: FitnessScoreService,
) {}
  private parseGeminiJson(result: string) {
    try {
      const cleaned = result
        .replace(/```json/gi, '')
        .replace(/```/g, '')
        .trim();

      return JSON.parse(cleaned);
    } catch {
      return {
        raw: result,
      };
    }
  }
 private normalizeWorkoutResponse(data: any) {
  if (!data) return data;

  return {
    program_info: {
      title:
        data.programInfo?.title ??
        data.program_info?.title ??
        'Workout Plan',

      description:
        data.programInfo?.description ??
        data.program_info?.description ??
        '',

      goal:
        data.programInfo?.goal ??
        data.program_info?.goal,

      experience_level:
        data.programInfo?.experience ??
        data.programInfo?.experience_level ??
        data.program_info?.experience_level,

      equipment:
        data.programInfo?.equipment ??
        data.program_info?.equipment,

      split:
        data.programInfo?.split ??
        data.program_info?.split,
    },

    workout_plan: (
      data.workoutPlan ??
      data.workout_plan ??
      []
    ).map((day: any) => ({
      day: day.day,

      muscle_group:
        day.muscleGroup ??
        day.muscle_group,

      warm_up:
        day.warmUp ??
        day.warm_up,

      cool_down:
        day.coolDown ??
        day.cool_down,

      exercises:
        (day.exercises ?? []).map((exercise: any) => ({
          name: exercise.name,
          sets: exercise.sets,
          reps: exercise.reps,
          rest_time:
            exercise.restTime ??
            exercise.rest_time,
        })),
    })),
  };
}

private normalizeDietResponse(data: any) {
  if (!data) return data;

  return {
    nutrition_summary: {
      daily_calories:
        data.nutritionSummary?.dailyCalories ??
        data.nutrition_summary?.daily_calories ??
        data.dailyCalories,

      protein:
        data.nutritionSummary?.protein ??
        data.nutrition_summary?.protein ??
        data.protein,

      carbohydrates:
        data.nutritionSummary?.carbohydrates ??
        data.nutrition_summary?.carbohydrates ??
        data.carbohydrates,

      fat:
        data.nutritionSummary?.fat ??
        data.nutrition_summary?.fat ??
        data.fat,

      water_intake:
        data.nutritionSummary?.waterIntake ??
        data.nutrition_summary?.water_intake ??
        data.waterIntake,
    },

    meal_plan:
      data.mealPlan ??
      data.meal_plan ??
      [],
  };
}

  async generateWorkout(dto: GenerateWorkoutDto) {
    const prompt = `
You are an expert certified fitness coach.

Create a personalized ${dto.daysPerWeek}-day workout plan.

Goal: ${dto.goal}
Experience: ${dto.experience}
Equipment: ${dto.equipment}

Include:
- Program Info
- Day
- Muscle Group
- Exercises
- Sets
- Reps
- Rest Time
- Warm-up
- Cool-down

IMPORTANT:
Return ONLY valid JSON.
Do not use markdown.
Do not use triple backticks.
`;

    const result = (await this.groqService.generate(prompt)) ?? '';
console.log("========== GROQ WORKOUT ==========");
console.log(result);
console.log("=================================");
    const parsed =
  this.parseGeminiJson(result);

return {
  success: true,
  type: 'Workout Plan',
  response:
    this.normalizeWorkoutResponse(
      parsed,
    ),
};
  }
async generateDiet(dto: GenerateDietDto) {
  const prompt = `
You are an expert sports nutritionist.

Generate a personalized daily diet plan.

Age: ${dto.age}
Weight: ${dto.weight} kg
Height: ${dto.height} cm
Gender: ${dto.gender}
Goal: ${dto.goal}
Activity Level: ${dto.activityLevel}

Return ONLY valid JSON in this EXACT format.

{
  "nutrition_summary": {
    "daily_calories": 2500,
    "protein": "180 g",
    "carbohydrates": "300 g",
    "fat": "70 g",
    "water_intake": "3.5 L"
  },
  "meal_plan": [
    {
      "meal": "Breakfast",
      "foods": [
        "Oats",
        "Eggs",
        "Banana"
      ]
    },
    {
      "meal": "Lunch",
      "foods": [
        "Rice",
        "Chicken",
        "Vegetables"
      ]
    },
    {
      "meal": "Dinner",
      "foods": [
        "Fish",
        "Sweet Potato",
        "Salad"
      ]
    }
  ]
}

IMPORTANT:
Return ONLY JSON.
No markdown.
No explanations.
No triple backticks.
`;

  const result =
    (await this.groqService.generate(prompt)) ?? '';

  console.log("========== GROQ DIET ==========");
  console.log(result);
  console.log("===============================");

  const parsed =
    this.parseGeminiJson(result);

  return {
    success: true,
    type: 'Diet Plan',
    response:
      this.normalizeDietResponse(
        parsed,
      ),
  };
}

  async chat(dto: ChatDto) {
    const prompt = `
You are FitForge AI.

You are an expert in:
- Fitness
- Bodybuilding
- Powerlifting
- Weight Loss
- Muscle Gain
- Nutrition
- Supplements
- Recovery

User Question:
${dto.message}
`;

    const result = (await this.groqService.generate(prompt)) ?? '';

    return {
      success: true,
      type: 'AI Fitness Coach',
      response: result,
    };
  }

  async analyze(userId: string) {
  const profile = await this.usersService.getProfile(userId);
  const workouts = await this.workoutsService.findAll(userId);
  const progress = await this.progressService.findAll(userId);
  const nutrition = await this.nutritionService.findAll(userId);

  const progressMetrics =
    this.metricsService.calculateProgress(progress);

  const workoutMetrics =
    this.metricsService.calculateWorkout(workouts);

  const nutritionMetrics =
    this.metricsService.calculateNutrition(nutrition);

  const hasAnyData =
    progressMetrics.hasData ||
    workoutMetrics.hasData ||
    nutritionMetrics.hasData;

  // New user — no tracked data yet
  if (!hasAnyData) {
    return {
      success: true,
      fitnessScore: null,
      message:
        'Not enough fitness data yet. Start logging workouts, nutrition, and progress to receive personalized AI analysis.',
      metrics: {
        profile: {
          age: profile.age,
          gender: profile.gender,
          height: profile.height,
          weight: profile.weight,
          targetWeight: profile.targetWeight,
          goal: profile.goal,
          fitnessLevel: profile.fitnessLevel,
          activityLevel: profile.activityLevel,
          dailyCalories: profile.dailyCalories,
        },
        progress: progressMetrics,
        workouts: workoutMetrics,
        nutrition: nutritionMetrics,
      },
    };
  }

  const fitnessScore =
    this.fitnessScoreService.calculate(
      progressMetrics,
      workoutMetrics,
      nutritionMetrics,
    );

  const summary = {
    fitnessScore,

    profile: {
      age: profile.age,
      gender: profile.gender,
      height: profile.height,
      weight: profile.weight,
      targetWeight: profile.targetWeight,
      goal: profile.goal,
      fitnessLevel: profile.fitnessLevel,
      activityLevel: profile.activityLevel,
      dailyCalories: profile.dailyCalories,
    },

    progress: progressMetrics,
    workouts: workoutMetrics,
    nutrition: nutritionMetrics,
  };

  const prompt = `
You are FitForge AI.

The backend has already calculated all metrics and the fitness score.

DO NOT change the fitness score.

Based on the metrics below, provide professional coaching advice.

${JSON.stringify(summary, null, 2)}

Return ONLY valid JSON:

{
  "summary": "",
  "strengths": [],
  "improvements": [],
  "nutritionAdvice": [],
  "workoutAdvice": [],
  "recoveryAdvice": [],
  "nextGoal": "",
  "motivation": ""
}
`;

  try {
    const result =
      (await this.groqService.generate(prompt)) ?? '';

    return {
      success: true,
      fitnessScore,
      metrics: summary,
      analysis: this.parseGeminiJson(result),
    };
  } catch (error) {
    return {
      success: false,
      message: 'Unable to generate AI analysis.',
      error:
        error instanceof Error
          ? error.message
          : 'Unknown error',
    };
  }
}
}
