import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import useApi from '../hooks/useApi'
import LoadState from './LoadState'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const { data: projects, loading, error } = useApi('/projects')

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='project'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>My <span className='text-sky'>Projects</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Explore some of the projects I have worked on</p>

        <LoadState loading={loading} error={error} empty={projects?.length === 0} emptyText='No projects available yet.'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {projects?.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </LoadState>

        <div className='text-center mt-12'>
          <a href='#' className='inline-flex items-center px-6 py-3 border border-sky rounded-lg font-medium hover:bg-sky-20 transition duration-300'>
            <span>View More Projects</span>
            <FaArrowRight className='ml-2' />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
