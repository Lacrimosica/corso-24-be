import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class TokenGuard implements CanActivate {
  fixedToken = 'asdfghjkqwertyu';

  //   {
  //     'token-key': 'ABCD',
  //     'content-type': 'application/json',
  //     'user-agent': 'PostmanRuntime/7.36.1',
  //     accept: '*/*',
  //     'postman-token': '773e0c37-697b-41cb-bcb5-55e265cb3369',
  //     host: 'localhost:3000',
  //     'accept-encoding': 'gzip, deflate, br',
  //     connection: 'keep-alive',
  //     'content-length': '138'
  //   }

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const headers = request.headers;
    console.log(headers['token-key']);
    console.log(this.fixedToken);
    if (headers['token-key'] == this.fixedToken) {
      return true;
    } else {
      return false;
    }
  }
}
