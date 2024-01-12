import jwt, { VerifyOptions } from 'jsonwebtoken';
import { decode } from 'querystring';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { ok, unauthorized } from '../helpers/response/http';
import { Middleware } from './adapters/express-middleware-adapter';

export default class AuthMiddleware implements Middleware {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    // resgata e verifica token jwt do usuário
    const token = httpRequest.headers['x-access-token'];
    if (!token) {
      return unauthorized(new Error('No token provided.'));
    }

    try {
      const decode = <VerifyOptions>(
        jwt.verify(token, process.env.JWT_ACCESS_KEY)
      );

      if (decode.audience != 'aud-erp') {
        throw new Error('Invalid audience');
      }

      // @TODO verificar na base se usuário existe (decode.subject)

      return ok({ accountId: decode.subject }); // id do usuário
    } catch (err) {
      return unauthorized(new Error(err.message));
    }
  }
}
