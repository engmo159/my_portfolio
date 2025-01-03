/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
import ParticlesContainer from '../components/ParticlesContainer'

const Main = () => {
  return (
    <main className='bg-primary/60 h-screen'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-evenly pt-4 md:pt-8  xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className=' text-2xl md:text-4xl lg:h1  lg:pb-0 '
          >
            Building Dreams <br />
            Into <span className='text-accent'>Web Solutions</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 lg:mt-4 mb-10 xl:mb-16'
          >
            I am <span className='text-white'>Eng Mohamed Saeed</span> a full
            stack developer, enthusiastic about crafting seamless and engaging
            web experiences. Let's turn your vision into a digital reality
            together.
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative z-20'>
            <ProjectsBtn />
          </div>
          <div>
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='hidden xl:flex'
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
      </div>
      {/* image */}
      <div className='w-full h-full absolute right-0 bottom-0'>
        {/* big image */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar image  */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[452px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
        >
          <Avatar hover />
        </motion.div>
      </div>
    </main>
  )
}

export default Main
