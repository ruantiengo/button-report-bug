import React from 'react'
import { CloseButton } from '../close-button'
import sucessoImagem from '../../../assets/Figmoji/success.svg'
type FeedbackContentStepProps ={
    onFeedBackRestartRequested: () => void
}
export function FeedbackSuccesSte ({ onFeedBackRestartRequested }: FeedbackContentStepProps) {
  return (
        <>
            <header>
                <CloseButton/>
            </header>
            <div className='flex flex-col items-center justify-center py-10 w-[304px]'>
                <img src={sucessoImagem} alt="Okay" />
                <span className='text-xl mt-2'>Agradecemos o feedback!</span>
                <button
                onClick={onFeedBackRestartRequested}
                className='py-2 px-5 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-600 transition-colors'>Quero enviar outro</button>
            </div>
        </>
  )
}
