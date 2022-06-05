 export interface SendEMailData{
     subject: string;
     body: string;
 }
 export interface MailAdapter {
     sendEmail: (data: SendEMailData) => Promise<void>
 }