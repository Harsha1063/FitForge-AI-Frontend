import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('FitForge API')
    .setDescription(
      'AI Powered Fitness Tracking and Workout Management API',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(
    app,
    config,
  );

  SwaggerModule.setup('api', app, document);

  await app.listen(5000);

  console.log(
    '🚀 FitForge API running at http://localhost:5000',
  );

  console.log(
    '📚 Swagger Docs: http://localhost:5000/api',
  );
}

bootstrap();