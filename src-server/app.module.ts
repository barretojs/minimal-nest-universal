import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { join, resolve } from 'path';

const BROWSER_DIR = join(process.cwd(), 'dist', 'front');
applyDomino(global, join(BROWSER_DIR, 'index.html'));

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: BROWSER_DIR,
      bundle: require(resolve('dist/front/server/main.js'))
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
