import React from 'react'
import { motion } from 'framer-motion'
import { assetUrl } from '../lib/api'
import { useContent } from '../context/ContentContext'

const Hero = () => {
  const { about, error } = useContent()

  if (!about) {
    return (
      <div id='home' className='min-h-screen flex items-center justify-center bg-dark-100'>
        <p className={error ? 'text-red-400' : 'text-gray-400'}>{error || 'Loading...'}</p>
      </div>
    )
  }

  const [firstName, ...rest] = about.name.split(' ')

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Hi, I'm <span className='text-sky'>{about.name}</span>
          </h1>
          <h2
            key={about.title}
            style={{ '--chars': `${Math.round(about.title.length * 0.8125)}ch` }}
            className='text-2xl md:text-4xl font-semibold mb-6 typewriter'
          >
            {about.title}
          </h2>
          <p className='text-lg text-gray-300 mb-8'>{about.hero_text}</p>

          <div className='flex space-x-4'>
            <a href='#project' className='px-6 py-3 bg-sky rounded-lg font-medium hover:bg-sky-700 transition duration-300'>{about.cta_primary_text}</a>
            <a href='#contact' className='px-6 py-3 border border-sky rounded-lg font-medium hover:bg-sky-20 transition decoration-sky'>{about.cta_secondary_text}</a>
          </div>
        </div>

        <div className='md:w-1/2 flex justify-center'>
          <div className='relative w-64 h-64 md:w-80 md:h-80'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-sky to-sky opacity-70'></div>
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10'
              src={assetUrl(about.profile_image)}
              alt={`Portrait of ${firstName} ${rest.join(' ')}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
