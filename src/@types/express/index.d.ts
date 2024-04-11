export interface IUserRequest {
  id: number;
  name?: string;
}

declare global {
  namespace Express {
    interface Request {
      user: Partial<IUserRequest>;
    }
  }
}
