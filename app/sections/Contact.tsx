/* eslint-disable react/no-unescaped-entities */
'use client'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { useState } from 'react'
import { sendContactForm } from '../lib/api'
import { toast } from 'react-toastify'

const initValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}
const initState = { values: initValues, error: '', success: '' }

const Contact = () => {
  const [state, setState] = useState(initState)
  const { values, error } = state
  const handleChange = ({ target }) => {
    setState(prev => ({
      ...prev,
      values: { ...prev.values, [target.name]: target.value },
    }))
  }
  const handleSubmit = async e => {
    e.preventDefault()
    setState(prev => ({ ...prev, error: '', success: '' }))
    try {
      await sendContactForm(values)
      toast.success('Message sent successfully!')
      setState({ values: initValues, error: '', success: '' })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
      setState(prev => ({ ...prev, error: error.message }))
    }
  }
  return (
    <div className='h-full bg-primary/30 section' id='contact'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text&form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {error && <p className='text-accent my-4 text-xl'>{error}</p>}
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            onSubmit={handleSubmit}
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                placeholder='Name'
                className='input'
                name='name'
                value={values.name}
                onChange={handleChange}
                required
              />
              <input
                type='email'
                placeholder='Email'
                className='input'
                name='email'
                value={values.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type='text'
              placeholder='Subject'
              className='input'
              name='subject'
              value={values.subject}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder='Message'
              className='textarea'
              name='message'
              value={values.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's talk
              </span>
              <BsArrowRight className='absolute text-[22px] -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact
