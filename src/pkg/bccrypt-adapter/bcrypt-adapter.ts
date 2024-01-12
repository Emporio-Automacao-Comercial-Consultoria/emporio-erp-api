import bcrypt from 'bcrypt';
import { Crypt } from '../../domain/adapters/crypt';

export default class BcryptAdapter implements Crypt {
  constructor(private readonly salt: number) {
    this.salt = salt;
  }

  async generateHash(plaintext: string): Promise<string> {
    const digest = await bcrypt.hash(plaintext, this.salt);
    return digest;
  }

  async compare(plaintext: string, digest: string): Promise<boolean> {
    const isValid = await bcrypt.compare(plaintext, digest);
    return isValid;
  }
}
