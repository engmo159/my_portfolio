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
    <div className='h-full bg-primary/30 xl:py-36 flex items-center sm:items-start  justify-center section'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row  gap-x-8'>
          {/* text */}
          <div className='text-center text-sm xl:text-xl flex xl:w-[30vw] flex-col lg:text-left  mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate={controls} // Use controls from useAnimation
              ref={ref} // Attach ref from useInView
              className='xl:h2 xl:mt-12 text-center text-3xl'
            >
              My Work<span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate={controls} // Use controls from useAnimation
              ref={ref} // Attach ref from useInView
              className='mb-4  mx-auto lg:mx-0'
            >
              Here you can explore some of the projects I've worked on,
              showcasing my skills in full stack development. Each project
              highlights my ability to build seamless and engaging web
              experiences. Let's turn your vision into a digital reality
              together.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate={controls} // Use controls from useAnimation
            ref={ref} // Attach ref from useInView
            className='w-full xl:max-w-[65%]'
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

//  {/* counters */}
//  <motion.div
//  variants={fadeIn('right', 0.6)}
//  initial='hidden'
//  animate='show'
//  exit='hidden'
//  className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
// >
//  {/* counters */}
//  <div className='flex flex-1 xl:gap-x-6'>
//    {/* completed projects */}
//    <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
//      <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
//        <Countup start={0} end={20} duration={5} /> +
//      </div>
//      <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
//        Completed projects
//      </div>
//    </div>
//    {/* clients */}
//    <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
//      <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
//        <Countup start={0} end={250} duration={5} /> +
//      </div>
//      <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
//        Satesfied Clients
//      </div>
//    </div>
//    {/* projects */}
//    <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
//      <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
//        <Countup start={0} end={650} duration={5} /> +
//      </div>
//      <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
//        Finished Projects
//      </div>
//    </div>
//    {/* awards */}
//    <div className='relative flex-1 '>
//      <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
//        <Countup start={0} end={8} duration={5} /> +
//      </div>
//      <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
//        Winning Awards
//      </div>
//    </div>
//  </div>
// </motion.div>
