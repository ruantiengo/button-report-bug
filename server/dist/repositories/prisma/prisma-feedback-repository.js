"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaFeedBacksRepository = void 0;
const prisma_1 = require("../../prisma");
class PrismaFeedBacksRepository {
    async create(feedBack) {
        const feedback = await prisma_1.prisma.feedBack.create({
            data: {
                comment: feedBack.comment,
                type: feedBack.type,
                screenshot: feedBack.screenshot
            }
        });
    }
}
exports.PrismaFeedBacksRepository = PrismaFeedBacksRepository;
