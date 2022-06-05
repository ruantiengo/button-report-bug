"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_usecase_1 = require("./submit-usecase");
const makeFeedbackRepositoryStub = () => {
    class FeedbacksRepositoryStub {
        async create(feedBack) {
        }
        ;
    }
    return new FeedbacksRepositoryStub();
};
const makeEmailSenderStub = () => {
    class EmailSendStub {
        async sendEmail(data) {
        }
        ;
    }
    return new EmailSendStub();
};
const makeSut = () => {
    const feedbacksRepositoryRepositoryStub = makeFeedbackRepositoryStub();
    const emailSendStub = makeEmailSenderStub();
    const sut = new submit_usecase_1.SubmitFeedbackUseCase(feedbacksRepositoryRepositoryStub, emailSendStub);
    return { sut };
};
describe('SUBMIT USE CASE', () => {
    it("Should be able to submit a feedback", async () => {
        const { sut } = makeSut();
        const httpRequest = {
            type: "BUG",
            comment: "Ola"
        };
        expect(sut.execute(httpRequest)).resolves.not.toThrow();
    });
});
