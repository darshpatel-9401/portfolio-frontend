import React, { createContext, useContext } from 'react'
import useApi from '../hooks/useApi'

const ContentContext = createContext({ about: null, settings: {}, error: '' })
export const useContent = () => useContext(ContentContext)

// Loads "about" and "settings" once, because Navbar, Hero, About, Contact and Footer all need them
export const ContentProvider = ({ children }) => {
  const about = useApi('/about')
  const settings = useApi('/settings')
  return (
    <ContentContext.Provider value={{ about: about.data, settings: settings.data || {}, error: about.error }}>
      {children}
    </ContentContext.Provider>
  )
}
