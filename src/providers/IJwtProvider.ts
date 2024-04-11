export interface data {
  userId: number;
  expiresIn: string;
}

export interface IjwtProvider {
  sign(data: data): Promise<string>;
  verify(token: string): Promise<{ id: number }>;
}
