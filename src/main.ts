/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Pos Inventory API')
    .setDescription('The pos-inventory API description')
    .setVersion('1.0')
    .addTag('pos-inv')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: false,
      whitelist: false,
      forbidNonWhitelisted: false,
    }),
  );

  app.enableCors({
    origin:
      process.env.NODE_ENV === 'production'
        ? ['https://demo-front-drab.vercel.app', 'http://localhost:3000']
        : true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
