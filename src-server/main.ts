import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';
import { Logger } from '@nestjs/common';

enableProdMode();

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    methods: 'GET',
    maxAge: 3600
  });
  await app.listen(PORT);
}
bootstrap().then(() =>
  Logger.log(`Server listening on http://localhost:${PORT}`)
);
