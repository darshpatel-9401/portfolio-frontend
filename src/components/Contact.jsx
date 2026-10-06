import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'
import { api } from '../lib/api'
import { useContent } from '../context/ContentContext'

const emptyForm = { name: '', email: '', message: '' }

const Contact = () => {
  const { about } = useContent()
  const [form, setForm] = useState(emptyForm)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState({ type: '', text: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Frontend -> Flask API -> MongoDB (+ email to you)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setStatus({ type: 'error', text: 'Please enter a valid email address.' })
      return
    }
    setSending(true)
    setStatus({ type: '', text: '' })
    try {
      const res = await api('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus({ type: 'ok', text: res.message })
      setForm(emptyForm)
    } catch (err) {
      setStatus({ type: 'error', text: err.message })
    } finally {
      setSending(false)
    }
  }

  // social icons only show when a link is saved in the CMS
  const socials = [
    [FaGithub, about?.github_url, 'GitHub', 'text-sky hover:bg-sky'],
    [FaLinkedin, about?.linkedin_url, 'LinkedIn', 'text-blue-400 hover:bg-blue-400'],
    [FaTwitter, about?.twitter_url, 'Twitter', 'text-sky hover:bg-sky'],
    [FaDribbble, about?.dribbble_url, 'Dribbble', 'text-orange-400 hover:bg-orange-400'],
  ].filter(([, url]) => url)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='contact'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>Get <span className='text-sky'>In Touch</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to work together? Feel free to reach out.</p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name' className='block text-gray-300 mb-2'>Your Name</label>
              <input id='name' name='name' type='text' required maxLength={150} value={form.name} onChange={handleChange} className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
            </div>
            <div>
              <label htmlFor='email' className='block text-gray-300 mb-2'>Email Address</label>
              <input id='email' name='email' type='email' required value={form.email} onChange={handleChange} className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
            </div>
            <div>
              <label htmlFor='message' className='block text-gray-300 mb-2'>Message</label>
              <textarea id='message' name='message' required minLength={5} maxLength={5000} value={form.message} onChange={handleChange} className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none resize-none'></textarea>
            </div>
            {status.text && (
              <p role='status' className={status.type === 'ok' ? 'text-green-400' : 'text-red-400'}>{status.text}</p>
            )}
            <button type='submit' disabled={sending} className='w-full px-6 py-3 bg-sky rounded-lg font-medium hover:bg-sky-700 transition duration-300 cursor-pointer disabled:opacity-60'>
              {sending ? 'Sending...' : 'Send'}
            </button>
          </form>

          <div className='space-y-8'>
            {about?.location && (
              <div className='flex items-start'>
                <div className='text-sky text-2xl mr-4'><FaMapMarkerAlt /></div>
                <div><h3 className='text-lg font-semibold mb-2'>Location</h3><p className='text-gray-400'>{about.location}</p></div>
              </div>
            )}
            {about?.email && (
              <div className='flex items-start'>
                <div className='text-sky text-2xl mr-4'><FaEnvelope /></div>
                <div><h3 className='text-lg font-semibold mb-2'>Email</h3><p className='text-gray-400'>{about.email}</p></div>
              </div>
            )}
            {about?.phone && (
              <div className='flex items-start'>
                <div className='text-sky text-2xl mr-4'><FaPhone /></div>
                <div><h3 className='text-lg font-semibold mb-2'>Phone</h3><p className='text-gray-400'>{about.phone}</p></div>
              </div>
            )}

            {socials.length > 0 && (
              <div className='pt-4'>
                <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                <div className='flex space-x-4'>
                  {socials.map(([Icon, url, label, color]) => (
                    <a key={label} href={url} target='_blank' rel='noopener noreferrer' aria-label={label} className={`w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center hover:text-white transition duration-300 ${color}`}><Icon /></a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
