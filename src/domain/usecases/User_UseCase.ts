import { badRequest } from '../../helpers/response/http';
import { User } from '../models/User';

export default class UserUseCase {
  async add(user: User): Promise<boolean> {
    if (!user.name) {
      const error = new Error('Missing user name');
      throw badRequest(error);
    }

    return true;
  }
}
