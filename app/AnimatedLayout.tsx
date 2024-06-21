'use client'
import React, { ReactNode, FC } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from './components/Transition'

interface Props {
  children: ReactNode
}

const AnimatedLayout: FC<Props> = ({ children }) => {
  const pathName = usePathname()
  return (
    <>
      {/* <AnimatePresence mode='wait'>
        <motion.div key={pathName} className='h-full'>
          <Transition />
          {children}
        </motion.div>
      </AnimatePresence> */}
      <AnimatePresence mode='wait'>
        <div className='w-full h-full'>
          {/* <Transition pathname={pathName}> */}
          {children}
          {/* </Transition> */}
        </div>
      </AnimatePresence>
    </>
  )
}

export default AnimatedLayout
