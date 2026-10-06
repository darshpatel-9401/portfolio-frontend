import React from 'react'
import { motion } from 'framer-motion'
import { assetUrl } from '../lib/api'

const ProjectCard = ({ title, description, image, tech, demo_url, github_url }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className='bg-dark-300 rounded-2xl overflow-hidden cursor-pointer'
    >
      {image && <img src={assetUrl(image)} alt={title} className='w-full h-60 object-cover' />}
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {tech.map((item, index) => (
            <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>{item}</span>
          ))}
        </div>
        {/* a button only appears when the CMS has a link for it */}
        <div className='flex gap-2'>
          {demo_url && <a href={demo_url} target='_blank' rel='noopener noreferrer' className='flex-1 text-center px-4 py-2 bg-sky rounded-lg font-medium hover:bg-sky-700 transition duration-300'>View Demo</a>}
          {github_url && <a href={github_url} target='_blank' rel='noopener noreferrer' className='flex-1 text-center px-4 py-2 border border-sky rounded-lg font-medium hover:bg-sky-20 transition duration-300'>Code</a>}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
