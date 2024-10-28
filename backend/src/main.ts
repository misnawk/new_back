import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './util/setupSwagger';
import { HttpErrorFilter } from './util/HttpErrorFilter';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { LOCAL_URL, SERVER_PORT, SERVER_URL } from './util/URLS';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  config(); // .env 파일 로드

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = SERVER_PORT;
  app.useStaticAssets('public/api-docs'); // 정적 파일 제공 경로 설정
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 정의되지 않은 속성 제거
      forbidNonWhitelisted: true, // DTO에 정의되지 않은 속성이 포함된 경우 에러 발생
      transform: true, // 자동 변환
    }),
  );

  app.enableCors({
    origin: SERVER_URL || LOCAL_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.useGlobalFilters(new HttpErrorFilter());
  // 전역 파이프 설정

  setupSwagger(app);
  await app.listen(process.env.PORT || port);
  console.log(`Server is running on port:${port}!`);
}

bootstrap();
