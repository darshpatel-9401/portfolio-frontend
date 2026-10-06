import React from 'react'
import { motion } from 'framer-motion'
import { getIcon } from '../lib/icons'
import useApi from '../hooks/useApi'
import LoadState from './LoadState'

const Skills = () => {
  const { data: skills, loading, error } = useApi('/skills')

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='skill'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>My <span className='text-sky'>Skills</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Explore my technical skills and expertise</p>

        <LoadState loading={loading} error={error} empty={skills?.length === 0} emptyText='No skills added yet.'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            {skills?.map((skill) => {
              const Icon = getIcon(skill.icon)
              return (
                <div key={skill.id} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                  <div className='flex items-center mb-4'>
                    <Icon className='w-12 h-12 text-sky mr-6' />
                    <h3 className='text-xl font-semibold'>{skill.title}</h3>
                  </div>
                  <p className='text-gray-400 mb-4'>{skill.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {skill.tags.map((tech, index) => (
                      <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>{tech}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </LoadState>
      </div>
    </motion.div>
  )
}

export default Skills
