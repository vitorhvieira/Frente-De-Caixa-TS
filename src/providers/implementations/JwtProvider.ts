import jwt from "jsonwebtoken";
import { IJwtProvider, data } from "../IJwtProvider";

export class JwtProvider implements IJwtProvider {
  async sign(data: data): Promise<string> {
    const token = jwt.sign({ id: data.userId }, process.env.JWT_PASS, {
      expiresIn: data.expiresIn,
    });
    return token;
  }
  async verify(token: string): Promise<{ id: number }> {
    const tokenVerify = jwt.verify(token, process.env.JWT_PASS);

    return tokenVerify as { id: number };
  }
}
