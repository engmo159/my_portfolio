'use client'
// icons

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import Circles from '../components/Circles'
import Avatar from '../components/Avatar'
import { motion, useAnimation } from 'framer-motion'
import { fadeIn } from '../variants'
import Countup from 'react-countup'

// Data
const skillData = [
  {
    title: 'Front End',
    info: [
      {
        title: 'HTML5',
        icons: [
          <Image
            src={'/icons/html-5.png'}
            key='html'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
      {
        title: 'CSS',
        icons: [
          <Image
            src={'/icons/css-3.png'}
            key='css'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
      {
        title: 'Java Script',
        icons: [
          <Image
            src={'/icons/js.png'}
            key='js'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
      {
        title: 'React JS',
        icons: [
          <Image
            src={'/icons/physics.png'}
            key='react'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
      {
        title: 'Next JS',
        icons: [
          <Image
            src={'/icons/nextjs.svg'}
            key='next'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
      {
        title: 'Framer Motion',
        icons: [
          <Image
            src={'/icons/framer-logo.svg'}
            key='framer'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
      {
        title: 'Figma',
        icons: [
          <Image
            src={'/icons/apps-figma.svg'}
            key='html'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
      {
        title: 'PhotoShop',
        icons: [
          <Image
            src={'/icons/adobe-photoshop.png'}
            key='photoshop'
            alt=''
            width={1024}
            height={1024}
          />,
        ],
      },
      {
        title: 'Bootstrap',
        icons: [
          <Image
            src={'/icons/bootstrap.png'}
            key='strap'
            alt=''
            width={512}
            height={512}
            className='text-white bg-white rounded-lg'
          />,
        ],
      },
      {
        title: 'TailwindCSS',
        icons: [
          <Image
            src={'/icons/tailwind-css-icon.png'}
            key='tailwind'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
      {
        title: 'React Three Fiber',
        icons: [
          <Image
            src={'/icons/three-js-icon.png'}
            key='three'
            alt=''
            width={512}
            height={512}
            className=' bg-white rounded-lg'
          />,
        ],
      },
      {
        title: 'Redux Toolkit',
        icons: [
          <Image
            src={'/icons/redux.png'}
            key='three'
            alt=''
            width={512}
            height={512}
            className=' bg-white rounded-lg'
          />,
        ],
      },
      {
        title: 'React Bootstrap',
        icons: [
          <Image
            src={'/icons/react_boot.png'}
            key='three'
            alt=''
            width={512}
            height={512}
            className=' bg-white rounded-lg'
          />,
        ],
      },
      {
        title: 'Material UI',
        icons: [
          <Image
            src={'/icons/mui.png'}
            key='three'
            alt=''
            width={512}
            height={512}
            className=' bg-white rounded-lg'
          />,
        ],
      },
      {
        title: 'Material Tailwind',
        icons: [
          <Image
            src={'/icons/material_tailwind.png'}
            key='three'
            alt=''
            width={512}
            height={512}
            className=' bg-white rounded-lg'
          />,
        ],
      },
      {
        title: 'Material Elements',
        icons: [
          <Image
            src={'/icons/m_elements.webp'}
            key='three'
            alt=''
            width={512}
            height={512}
            className=' bg-white rounded-lg'
          />,
        ],
      },
    ],
  },
  {
    title: 'Back End',
    info: [
      {
        title: 'Node.JS',
        icons: [
          <Image
            src={'/icons/node-js.png'}
            key='node-js'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
      {
        title: 'Express.JS',
        icons: [
          <Image
            src={'/icons/icons8-express-js-500.png'}
            key='csEXPRESSs'
            alt=''
            width={500}
            height={500}
          />,
        ],
      },
      {
        title: 'Mongo DB',
        icons: [
          <Image
            src={'/icons/icons8-mongo-db-96.png'}
            key='mongo'
            alt=''
            width={96}
            height={96}
          />,
        ],
      },
      {
        title: 'Mongoose JS',
        icons: [
          <Image
            src={'/icons/mongoose.png'}
            key='mongo'
            alt=''
            width={96}
            height={96}
          />,
        ],
      },
      {
        title: 'JSON Server',
        icons: [
          <Image
            src={'/icons/json.jpeg'}
            key='mongo'
            alt=''
            width={96}
            height={96}
          />,
        ],
      },

      {
        title: 'Next JS',
        icons: [
          <Image
            src={'/icons/nextjs.svg'}
            key='next'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
    ],
  },
  {
    title: 'Tools & Platforms',
    info: [
      {
        title: 'Git',
        icons: [
          <Image
            src={'/icons/social.png'}
            key='GIT'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
      {
        title: 'GetHub',
        icons: [
          <Image
            src={'/icons/social2.png'}
            key='GITHUB'
            alt=''
            width={500}
            height={500}
            className='bg-white rounded-lg'
          />,
        ],
      },
      {
        title: 'Vercel',
        icons: [
          <Image
            src={'/icons/Vercel.svg'}
            key='vercel'
            alt=''
            width={96}
            height={96}
          />,
        ],
      },

      {
        title: 'VS Code',
        icons: [
          <Image
            src={'/icons/visual-studio.png'}
            key='vs'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
      {
        title: 'Netlify',
        icons: [
          <Image
            src={'/icons/netlify.png'}
            key='vs'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
      {
        title: 'Postman',
        icons: [
          <Image
            src={'/icons/postman-icon-svgrepo-com.svg'}
            key='vs'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
      {
        title: 'Render',
        icons: [
          <Image
            src={'/icons/render.png'}
            key='vs'
            alt=''
            width={512}
            height={512}
          />,
        ],
      },
    ],
  },
]

const Skills = () => {
  const [index, setIndex] = useState(0)
  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
  }, [controls, inView])
  return (
    <div className='h-full relative bg-primary/30 sm:pt-12 xl:py-32 text-center xl:text-left section'>
      <Circles />
      {/* Avatar image */}
      <motion.div
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[233px]'
        ref={ref}
      >
        <Avatar hover={false} />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-8 xl:pl-36 xl:pr-24'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-evenly '>
          <motion.h2
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='xl:h2 text-3xl'
            ref={ref}
          >
            Mastering essential <span className='text-accent'>skills</span> for
            dynamic development.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 sm:mb-6 xl:mb-12 px-2 xl:px-0'
            ref={ref}
          >
            I am working on web development and design skills. Through
            continuous learning and hands-on projects, I am actively building
            expertise in these areas.
          </motion.p>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px] '
          ref={ref}
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {skillData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex
                    ? 'text-accent after:w-full after:bg-accent after:transition-all after:duration-300'
                    : ''
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className='flex  gap-2 items-center xl:items-start flex-wrap max-w-[100%] md:mt-4'>
            {skillData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex  items-center justify-between text-white/60 basis-1/3 border border-white/30 rounded-xl px-1 py-1  shadow-xl'
                >
                  {/* title  */}
                  <div className='font-light'>{item.title}</div>

                  <div className='text-xl'>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className='max-w-8 xl:max-w-10'>
                          {icon}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
