import React from 'react'
import { motion } from 'framer-motion'
import { assetUrl } from '../lib/api'
import { getIcon } from '../lib/icons'
import { useContent } from '../context/ContentContext'
import useApi from '../hooks/useApi'
import LoadState from './LoadState'

const About = () => {
  const { about } = useContent()
  const highlights = useApi('/highlights')

  // the CMS stores the story as one text; an empty line starts a new paragraph
  const paragraphs = (about?.journey_text || '').split(/\n\s*\n/).filter(Boolean)

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        id='about'
        className='py-20 bg-dark-200'
      >
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-4'>About
            <span className='text-sky'> Me</span>
          </h2>
          <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know about my background and passion</p>

          <div className='flex flex-col md:flex-row items-center gap-12'>
            <div className='md:w-1/2 rounded-2xl overflow-hidden'>
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.2 }}
                className='w-full h-full object-cover'
                src={assetUrl(about?.profile_image)}
                alt='Profile'
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='md:w-1/2'
            >
              <div className='rounded-2xl p-8'>
                <h3 className='text-2xl font-semibold mb-6'>{about?.journey_title}</h3>
                {paragraphs.map((text, index) => (
                  <p key={index} className={`text-gray-300 ${index === paragraphs.length - 1 ? 'mb-12' : 'mb-6'}`}>{text}</p>
                ))}

                <LoadState loading={highlights.loading} error={highlights.error} empty={highlights.data?.length === 0} emptyText=''>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {highlights.data?.map((data) => {
                      const Icon = getIcon(data.icon)
                      return (
                        <div key={data.id} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                          <div className='text-sky text-4xl mb-4'>
                            <Icon />
                          </div>
                          <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                          <p className='text-gray-400'>{data.description}</p>
                        </div>
                      )
                    })}
                  </div>
                </LoadState>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
