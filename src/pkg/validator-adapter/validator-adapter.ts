import validator from 'validator';
import { Validator } from '../../domain/adapters/validator';

export default class ValidatorAdapter implements Validator {
  isEmail(plaintext: string): boolean {
    return validator.isEmail(plaintext);
  }

  isEmpty(plaintext: string): boolean {
    return validator.isEmpty(plaintext);
  }
}
