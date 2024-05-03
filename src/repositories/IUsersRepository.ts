import { User } from "../entities/User";

export interface IFindBy {
  key: "id" | "email";
  value: string | number;
}

export interface IFindOther {
  userID: number;
  email: string;
}

export interface IUserUpdate {
  userUpdate: Omit<Partial<User>, "id">;
  id: number;
}

export interface IUsersRepository {
  findBy(props: IFindBy): Promise<User>;
  findOther(props: IFindOther): Promise<void | User>;
  save(user: User): Promise<void>;
  update(props: IUserUpdate): Promise<void>;
}
