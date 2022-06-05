import { FeedbackType, feedbackTypes } from '../types/feedback-types'
import React from 'react'
import { CloseButton } from '../close-button'

type FeedbackTypeStepProps = {
  onFeedbackTypeChange: (type: FeedbackType) => void
}

export function FeedbackTypeStep ({ onFeedbackTypeChange }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className='text-xl leading-6' >Deixe o seu feedback</span>
        <CloseButton />
      </header>
      <main className='flex py-8 gap-2 w-full'>

        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                onClick={() => {
                  onFeedbackTypeChange(key as FeedbackType)
                }}
                className='bg-zinc-800 rounded-lg pt-5 w-24 flex-1
                             flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:outline-none
                             focus:border-brand-500 '
                key={key} >
                <img src={value.img.source} alt={value.img.alt} />
                <span>{value.title}</span>
              </button>
            )
          })
        }
      </main>
    </>
  )
}
