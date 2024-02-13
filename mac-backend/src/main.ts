import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { Announcement } from './announcements/announcements.schema';
import { Creator } from './creators/creators.schema';
import { Announcer } from './announcers/announcers.schema';
import { Click } from './clicks/clicks.schema';
import { Reference } from './references/references.schema';

async function bootstrap() {
  const cors = require('cors');

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('MAC API')
    .setDescription('APIs for MAC application.')
    .setVersion('1.0')
    .addTag('mac')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [Announcement, Creator, Announcer, Click, Reference],
  });
  SwaggerModule.setup('api', app, document);
  app.use(cors());
  dotenv.config();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
