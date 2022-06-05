import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import React, { useState } from 'react'
import { Loading } from './Loading'
type ScreenshotButtonTypes = {
  saveScreenshot(image: string | null): void
  screenshot: string | null
}
export function ScreenshotButton ({ saveScreenshot, screenshot }: ScreenshotButtonTypes) {
  const [isTakeingScreenshot, setIsTakingScreenshot] = useState(false)
  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png ')
    saveScreenshot(base64image)
    setIsTakingScreenshot(false)
  }
  if (screenshot) {
    return (
      <button
        type='button'
        style={
          {
            backgroundImage: `url(${screenshot})`,
            backgroundPosition: 'right-bottom',
            backgroundSize: 180
          }
        }
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zing-400 hover:text-zinc-100 transition-colors'
          onClick={() => {
            saveScreenshot(null)
          }}
        >

          <Trash weight='fill'/>
      </button>
    )
  }
  return (
        <button type='button'
        className='text-zinc-100 bg-zinc800 p-2 rounded-md border-transparent
        hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-offset-zinc-900'
        onClick={handleTakeScreenshot}>
            {isTakeingScreenshot ? <Loading/> : <Camera className='h-6 w-6'/>
}
      </button>
  )
}
