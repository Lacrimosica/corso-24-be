import { HttpException } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor() {
    super('this is a custom', 300);
  }
}
