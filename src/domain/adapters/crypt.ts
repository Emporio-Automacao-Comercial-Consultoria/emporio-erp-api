export interface Crypt {
  generateHash: (plaintext: string) => Promise<string>;
  compare(plaintext: string, digest: string): Promise<boolean>;
}
