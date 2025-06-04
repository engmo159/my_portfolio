/* eslint-disable react/no-unescaped-entities */
'use client'
import WorkSlider from '../components/WorkSlider'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeIn } from '../variants'
import Circles from '../components/Circles'
import Bulb from '../components/Bulb'
import { useEffect } from 'react'

const Work = () => {
  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
  }, [controls, inView])

  return (
    <div className='h-full bg-primary/30 xl:py-36 flex items-center sm:items-start justify-evenly section'>
      <Circles />
      <div className='container mx-auto my-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center text-sm xl:text-xl flex xl:w-[30vw] flex-col lg:text-left mb-16'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate={controls}
              ref={ref}
              className='xl:h2 xl:mt-12 text-center text-3xl mb-8'
            >
              My Work<span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate={controls}
              ref={ref}
              className='mb-4 mx-auto lg:mx-0'
            >
              Here you can explore some of the projects I've worked on,
              showcasing my full stack development skills. Each project
              highlights my ability to deliver seamless and engaging web
              experiences. If you have a vision, let's turn it into a
              professional website that serves your goals.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate={controls}
            ref={ref}
            className='w-full xl:max-w-[65%] h-full'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Work
