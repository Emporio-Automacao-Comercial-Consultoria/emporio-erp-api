export interface Validator {
  isEmail(plaintext: string): boolean;
  isEmpty(plaintext: string): boolean;
}
