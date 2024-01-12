import { HttpRequest, HttpResponse } from '../helpers/http';
import { ok, serverError } from '../helpers/response/http';
import AuthUseCase from '../domain/usecases/Auth_UseCase';
import UserUseCase from '../domain/usecases/User_UseCase';

export default class UserControllers {
  async login(httpRequest: HttpRequest): Promise<HttpResponse> {
    const auth = httpRequest.body;
    const authUseCase = new AuthUseCase();
    return ok({
      statusCode: 200,
      body: await authUseCase.autenticate(auth),
    });
  }

  async index(httpRequest: HttpRequest): Promise<HttpResponse> {
    const filters = httpRequest.body;

    if (Object.keys(filters).length == 0) {
      const error = new Error('Missing filters to search');
      throw serverError(error);
    }

    return ok({
      statusCode: 200,
      body: {
        user: 'user',
      },
    });
  }

  async add(httpRequest: HttpRequest): Promise<HttpResponse> {
    // const user = httpRequest.body;
    // const userUseCase = new UserUseCase();

    // await userUseCase.add(user);

    return ok({
      statusCode: 200,
      body: {
        user: 'user',
      },
    });
  }
}
