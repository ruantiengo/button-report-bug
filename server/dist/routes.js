"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const submit_usecase_1 = require("./useCases/submit-usecase");
const prisma_1 = require("./repositories/prisma");
const node_mailer_adapter_1 = require("./adapters/nodemailer/node-mailer-adapter");
exports.routes = express_1.default.Router();
exports.routes.post('/feedbacks', async (req, res) => {
    const { type, screenshot, comment } = req.body;
    const prismaFeedBacksRepository = new prisma_1.PrismaFeedBacksRepository();
    const nodemailer = new node_mailer_adapter_1.NodeMailerAdapter();
    const submitFeedback = new submit_usecase_1.SubmitFeedbackUseCase(prismaFeedBacksRepository, nodemailer);
    await submitFeedback.execute({ type, screenshot, comment });
    return res.status(201).send();
});
