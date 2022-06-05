import { prisma } from '../../prisma'
import {FeedbackReq, FeedbacksRepository} from '../feedbacks-repository'
export class PrismaFeedBacksRepository implements FeedbacksRepository{
    async create (feedBack: FeedbackReq):Promise<void> {
        const feedback = await prisma.feedBack.create({
            data:{
                 comment: feedBack.comment,
                 type: feedBack.type,
                 screenshot: feedBack.screenshot
            }
        })
    }
    
}