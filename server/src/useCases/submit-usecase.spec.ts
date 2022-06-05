import { MailAdapter, SendEMailData } from "../adapters/mail-adapter";
import { FeedbackReq, FeedbacksRepository } from "../repositories/feedbacks-repository";
import { SubmitFeedbackUseCase } from "./submit-usecase";
const makeFeedbackRepositoryStub = () => {
    class FeedbacksRepositoryStub implements FeedbacksRepository{
        async create(feedBack: FeedbackReq):Promise<void>{

        };
    }
    return new FeedbacksRepositoryStub()
}
const makeEmailSenderStub = () => {
    class EmailSendStub implements MailAdapter{
        async sendEmail (data: SendEMailData): Promise<void>{

        };
        
    }
    return new EmailSendStub()
}

const makeSut = () => {
    const feedbacksRepositoryRepositoryStub = makeFeedbackRepositoryStub()
    const emailSendStub = makeEmailSenderStub()
    const sut = new SubmitFeedbackUseCase(feedbacksRepositoryRepositoryStub, emailSendStub)
    return { sut }
}

describe('SUBMIT USE CASE', () => {
    it("Should be able to submit a feedback", async () => {
        const { sut } = makeSut()
        const httpRequest = {
            type: "BUG",
            comment: "Ola"
        }
        expect(sut.execute(httpRequest)).resolves.not.toThrow()
    }) 
});