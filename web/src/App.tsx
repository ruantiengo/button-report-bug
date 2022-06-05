import React from 'react'
import { Widget } from './components/WidgetForm/widget-button'

function App () {
  console.log(import.meta.env.VITE_API_URL)

  return (
    <div>
      <Widget></Widget>

    </div>
  )
}

export default App
