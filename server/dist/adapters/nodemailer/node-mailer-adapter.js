"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMailerAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class NodeMailerAdapter {
    async sendEmail(data) {
        const transport = nodemailer_1.default.createTransport({
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
        });
    }
    ;
}
exports.NodeMailerAdapter = NodeMailerAdapter;
