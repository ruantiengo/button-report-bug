import { FeedBack } from "@prisma/client"
import { MailAdapter } from "../adapters/mail-adapter"
import { FeedbacksRepository } from "../repositories/feedbacks-repository"

export interface SubmitFeedbackUseCaseRequest{
        type: string
        comment: string
        screenshot ?: string
}
export class SubmitFeedbackUseCase{
    constructor(private readonly feedBackRepository: FeedbacksRepository, private readonly mailAdapter: MailAdapter){
        this.feedBackRepository = feedBackRepository
    }
    async execute(request: SubmitFeedbackUseCaseRequest){
        const {type,comment,screenshot } = request
        await this.feedBackRepository.create(request)
    
        await this.mailAdapter.sendEmail({
            body: [`<img src="${screenshot}"/>`,`<h1>${type}</h1>`,[`${comment}`]].join('\n'),
            subject: 'Teste'
        })
    }

}