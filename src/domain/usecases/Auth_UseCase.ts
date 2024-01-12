import jwt, { Secret } from 'jsonwebtoken';
import { badRequest } from '../../helpers/response/http';
import ValidatorAdapter from '../../pkg/validator-adapter/validator-adapter';
import { Auth } from '../models/Auth';
import { User } from '../models/User';

interface Access {
  accessToken: string;
  refreshToken?: string;
  tokenType: string;
  user: User;
}

export default class UserUseCase {
  private readonly validation: ValidatorAdapter;

  constructor() {
    this.validation = new ValidatorAdapter();
  }

  async autenticate(auth: Auth): Promise<Access> {
    if (this.validation.isEmail(auth.mail) == false) {
      throw badRequest(new Error('E-mail inválido'));
    }

    if (this.validation.isEmpty(auth.pass) == true) {
      throw badRequest(new Error('Senha é obrigatório'));
    }

    // @TODO - pegar usuário na base e comparar senha com bcrypt adapter
    const user: User = {
      name: 'User Name',
      id: 'sfsdfsdfdsfdsf',
    };

    const audience = 'aud-erp'; // audience
    const subject = user.id; // id do usuario
    const secret: Secret = process.env.JWT_ACCESS_KEY;

    const token = jwt.sign({}, secret, {
      audience, 
      subject,
      expiresIn: 300,
    });

    return {
      accessToken: token,
      tokenType: 'Bearer',
      user,
    };
  }
}
