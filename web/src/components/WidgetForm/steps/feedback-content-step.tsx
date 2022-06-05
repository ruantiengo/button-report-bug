import { ArrowLeft } from 'phosphor-react'
import React, { FormEvent, useState } from 'react'
import { api } from '../../../lib/api'
import { CloseButton } from '../close-button'
import { Loading } from '../Loading'
import { ScreenshotButton } from '../screenshot-button'
import { FeedbackType, feedbackTypes } from '../types/feedback-types'
type FeedbackContentStepProps = {
    feedBackType: FeedbackType
    onFeedBackRestartRequested: Function
    onFeedBackSent: () => void
}
export function FeedbackContentStep ({ feedBackType, onFeedBackRestartRequested, onFeedBackSent }: FeedbackContentStepProps) {
  const feedBackTypeInfo = feedbackTypes[feedBackType]
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState<string>('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

  async function handleSubmitFeedback (event: FormEvent) {
    event.preventDefault()
    setIsSendingFeedback(true)
    await api.post('/feedbacks', {
      type: feedBackType,
      comment,
      screenshot
    })
    setIsSendingFeedback(false)
    onFeedBackSent()
  }
  return (
  <>
    <header >
      <button type='button' className='absolute top-5 left-5 text-zinc-400 hover:text-zinc-100' onClick={() => onFeedBackRestartRequested()}>
        <ArrowLeft weight='bold' className='w-4 h-4 ' />
      </button>
      <span className='flex text-xl leading-6 items-center gap-2'>
        <img src={feedBackTypeInfo.img.source} alt={feedBackTypeInfo.img.source} className="w-6 h-6"/>
        <span className='text-xl leading-6' >{feedBackTypeInfo.title}</span>
      </span>
      <CloseButton/>
    </header>
    <form className='my-4 w-full'>
      <textarea
      onChange={e => setComment(e.target.value)}
      name="" id="" placeholder='Conte com detalhes o que está acontecendo' className='sm:min-w-[204px] md:min-w-[320px] w-full min-h-[112px] text-sm placeholder-zinc-400
      text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none
      scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'></textarea>
    </form>

    <footer className='flex gap-2 mt-2 mb-5 justify-center items-center w-full'>
      <ScreenshotButton
        screenshot={screenshot}
        saveScreenshot={(screenshot: string) => { setScreenshot(screenshot) }}/>
      <button disabled={comment === '' || isSendingFeedback} type='submit' className={`p-2 bg-brand-500 rounded-md border-transparent border-2 border-solid
      flex-1 flex justify-center items-center  text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
      focus:ring-brand-500 ${comment === '' ? 'opacity-80' : ''}`}
      onClick={handleSubmitFeedback}
      >  {isSendingFeedback ? <Loading /> : 'Enviar feedback'}</button>
    </footer>
    </>
  )
}
