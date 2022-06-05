import { prisma } from './prisma'
import nodemailer from 'nodemailer'
import express, { json, Request, Response } from 'express'
import { SubmitFeedbackUseCase } from './useCases/submit-usecase';
import { PrismaFeedBacksRepository } from './repositories/prisma'
import { NodeMailerAdapter } from './adapters/nodemailer/node-mailer-adapter';
export const routes = express.Router()

routes.post('/feedbacks', async (req: Request,res: Response) => {
    const {type,screenshot,comment} = req.body
    const prismaFeedBacksRepository = new PrismaFeedBacksRepository()
    const nodemailer = new NodeMailerAdapter()
    const submitFeedback = new SubmitFeedbackUseCase(prismaFeedBacksRepository, nodemailer)  
  
    await submitFeedback.execute({type,screenshot,comment})
   
    return res.status(201).send()
})

routes.get("/", (req,res) => {
    res.json('Hello world')
})