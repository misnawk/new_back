import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Swagger 세팅
 *
 * @param {INestApplication} app
 */

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('WhiteClinic Project API Document')
    .setDescription('WhiteClinic Project API Docs description')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api-docs', app, document);
}