import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { useContent } from '../context/ContentContext'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { about } = useContent()
  const [firstName, ...lastName] = (about?.name || '').split(' ')

  const navItems = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skill', '#skill'],
    ['Project', '#project'],
    ['Experience', '#experience'],
    ['Contact', '#contact'],
  ]

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm px-4 py-4 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <div className='w-4 h-4 bg-sky rounded-full'></div>
          <a href='#home' onClick={() => setShowMenu(false)} className='text-3xl font-bold text-white'>
            {firstName}
            <span className='text-sky'> {lastName.join(' ')}</span>
          </a>
        </div>

        <div className='hidden md:flex space-x-10'>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className='relative text-white/80 transition duration-300 hover:text-sky group'>
              <span>{label}</span>
              <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-sky transition-all duration-300 group-hover:w-full'></span>
            </a>
          ))}
        </div>

        <div className='md:hidden'>
          {showMenu ? (
            <FaXmark onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
          ) : (
            <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
          )}
        </div>
      </div>

      {showMenu && (
        <div className='md:hidden mt-4 bg-dark-300 min-h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
          {navItems.map(([label, href]) => (
            <a
              key={href}
              onClick={() => setShowMenu(false)}
              href={href}
              className='relative text-white/80 transition duration-300 hover:text-sky group'
            >
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
