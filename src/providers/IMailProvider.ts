interface IAddress {
  email: string;
  name: string;
}

export interface IMassage {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendEmail(massage: IMassage): Promise<void>;
}
