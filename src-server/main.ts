import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';
import { Logger } from '@nestjs/common';

enableProdMode();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(PORT, HOST);
}
bootstrap()
  .then(() => Logger.log(`Server listening on http://${HOST}:${PORT}`))
  .catch(err => console.error(err));
