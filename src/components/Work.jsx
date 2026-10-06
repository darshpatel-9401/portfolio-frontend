import React from 'react'
import { motion } from 'framer-motion'
import useApi from '../hooks/useApi'
import LoadState from './LoadState'

const Work = () => {
  const { data: workData, loading, error } = useApi('/experience')

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='experience'
      className='py-20 bg-dark-100'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>Work <span className='text-sky'>Experience</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Explore my professional experience and career journey</p>

        <LoadState loading={loading} error={error} empty={workData?.length === 0} emptyText='No experience added yet.'>
        <div className='max-w-3xl mx-auto'>
          {workData?.map((data, index) => (
            <div key={data.id} className='max-w-3xl mx-auto mb-12'>
              <div className='relative pl-20'>
                <div className='absolute left-0 top-0 w-12 h-12 rounded-full bg-sky flex items-center justify-center text-dark-100'>
                  <span>{index + 1}</span>
                </div>
                <div className='bg-dark-300 rounded-2xl p-6'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='text-xl font-semibold'>{data.role}</h3>
                    <span className='px-3 py-1 bg-sky-20 text-sky rounded-full text-sm'>{data.duration}</span>
                  </div>
                  <p className='text-gray-400 mb-2'>{data.company}</p>
                  <p className='text-gray-300'>{data.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </LoadState>
      </div>
    </motion.div>
  )
}

export default Work
