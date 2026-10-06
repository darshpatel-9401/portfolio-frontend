import React from 'react'
import Home from './pages/Home'
import { ContentProvider } from './context/ContentContext'

const App = () => {
  return (
    <ContentProvider>
      <Home />
    </ContentProvider>
  )
}

export default App
