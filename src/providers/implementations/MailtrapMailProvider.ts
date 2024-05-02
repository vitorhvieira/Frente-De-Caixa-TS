import Mail from "nodemailer/lib/mailer";

import { IMailProvider, IMassage } from "../IMailProvider";
import nodemailer from "nodemailer";

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
  async sendEmail(massage: IMassage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: massage.to.name,
        address: massage.to.email,
      },
      from: {
        name: massage.from.name,
        address: massage.from.email,
      },
      subject: massage.subject,
      html: massage.body,
    });
  }
}
