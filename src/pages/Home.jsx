import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useContent } from '../context/ContentContext'

const Home = () => {
  const { about } = useContent()

  // browser tab title comes from the CMS too
  useEffect(() => {
    if (about) document.title = `${about.name} | ${about.title}`
  }, [about])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
