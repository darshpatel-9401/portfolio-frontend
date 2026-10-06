import React from 'react'
import { useContent } from '../context/ContentContext'

const Footer = () => {
  const { about, settings } = useContent()
  return (
    <div className='py-8 bg-dark-300'>
      <div className='container mx-auto px-6 text-center'>
        <p className='text-gray-400'>{settings.footer_text || `© ${new Date().getFullYear()} ${about?.name || ''}`}</p>
      </div>
    </div>
  )
}

export default Footer
