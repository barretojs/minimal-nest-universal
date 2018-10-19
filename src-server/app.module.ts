import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join, resolve } from 'path';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist', 'front'),
      bundle: require(resolve('dist/front/server/main.js'))
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
