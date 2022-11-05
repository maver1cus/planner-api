import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const test = process.env.TEST;
    return 'Hello World!' + test;
  }
}
