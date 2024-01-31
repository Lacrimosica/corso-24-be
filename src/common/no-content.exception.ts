import { HttpException, HttpStatus } from '@nestjs/common';

export class NoContentExcpeption extends HttpException {
  constructor() {
    super([], HttpStatus.NO_CONTENT);
  }
}
