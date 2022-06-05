export type FeedbackReq = {
    type: string
    comment: string
    screenshot?: string
}
export interface FeedbacksRepository{
    create: (feedBack: FeedbackReq) => Promise<void>
}