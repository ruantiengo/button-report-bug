"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFeedbackUseCase = void 0;
class SubmitFeedbackUseCase {
    feedBackRepository;
    mailAdapter;
    constructor(feedBackRepository, mailAdapter) {
        this.feedBackRepository = feedBackRepository;
        this.mailAdapter = mailAdapter;
        this.feedBackRepository = feedBackRepository;
    }
    async execute(request) {
        const { type, comment, screenshot } = request;
        await this.feedBackRepository.create(request);
        await this.mailAdapter.sendEmail({
            body: [`<img src="${screenshot}"/>`, `<h1>${type}</h1>`, [`${comment}`]].join('\n'),
            subject: 'Teste'
        });
    }
}
exports.SubmitFeedbackUseCase = SubmitFeedbackUseCase;
