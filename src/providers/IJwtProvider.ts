export interface data {
  userId: number;
  expiresIn: string;
}

export interface IJwtProvider {
  sign(data: data): Promise<string>;
  verify(token: string): Promise<{ id: number }>;
}
