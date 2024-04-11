import bcrypt from "bcrypt";
import { IBcryptProvider } from "../IBcryptProvider";

export class BcryptProvider implements IBcryptProvider {
  async hash(senha: string): Promise<string> {
    const hashPass = await bcrypt.hash(senha, 10);
    return hashPass;
  }
  async compare(senha: string, senhaHash: string): Promise<boolean> {
    const hashpass = await bcrypt.compare(senha, senhaHash);
    return hashpass;
  }
}
