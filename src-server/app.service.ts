import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root() {
    return {
      text: 'it works muahahaha!!'
    };
  }
}
