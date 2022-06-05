import { MailAdapter, SendEMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

export class NodeMailerAdapter implements MailAdapter{
    async sendEmail(data: SendEMailData): Promise<void>{
        const  transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "de6d276234a42b",
              pass: "a40f98dfaa2c2b"
            }
          }); 
          await transport.sendMail({
              from: 'Ruan <oi@ruan.com>',
              to: "GithubViwers <viwers@github.com>",
              subject: data.subject,
              html: data.body
            //   html: [`<h1>Hello World!</h1`].join('\n')
          })
    };
    
}