import React, { useState } from 'react'
import { FeedbackContentStep } from './steps/feedback-content-step'
import { FeedbackSuccesSte } from './steps/feedback-success-step'
import { FeedbackTypeStep } from './steps/feedbak-type-step'
import { FeedbackType } from './types/feedback-types'

export function WidgetForm () {
  const [feedbackType, setFeedBackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)
  const restartFeedBack = () => {
    setFeedBackType(null)
    setFeedbackSent(false)
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent === true
        ? (
          <FeedbackSuccesSte onFeedBackRestartRequested={restartFeedBack}/>
          )
        : (
          <>
            {feedbackType === null ? (<FeedbackTypeStep onFeedbackTypeChange={setFeedBackType}/>) : (<FeedbackContentStep feedBackType={feedbackType} onFeedBackRestartRequested={restartFeedBack} onFeedBackSent={() => setFeedbackSent(true)}/>)}
          </>)

      }
      <footer className='text-xs text-neutral-400'>
        <p>Feito com 💖 por <a href="https://www.ruantiengo.com " className='underline underline-offset-2'>Ruan Tiengo</a></p>
      </footer>
    </div>
  )
}
