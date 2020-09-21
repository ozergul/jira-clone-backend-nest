import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import * as nocache from 'nocache';
import { resolve } from 'path';

import { AppModule } from './app.module';
import { CustomValidationPipe } from './shared/pipes';

export async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.use(helmet());
  app.use(nocache());
  app.use(compression());
  app.use(
    (rateLimit as any)({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );

  app.useGlobalPipes(new CustomValidationPipe());
  app.useStaticAssets(resolve(__dirname, '..', 'resources'));

  const options = new DocumentBuilder()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  const logger = new Logger('bootstrap');
  const port = parseInt(process.env.APP_PORT, 10)
  await app.listen(port, () => {
    logger.log(`Server is listen on http://localhost:${port}`);
  });
}
