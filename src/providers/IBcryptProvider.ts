export interface IBcryptProvider {
  hash(senha: string): Promise<string>;
  compare(senha: string, senhaHash: string): Promise<boolean>;
}
