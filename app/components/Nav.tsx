'use client'
// icons
import Link from 'next/link'
import { FC } from 'react'
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2'

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'skills', path: '#skills', icon: <HiUser /> },

  { name: 'work', path: '/#work', icon: <HiViewColumns /> },

  {
    name: 'contact',
    path: '/#contact',
    icon: <HiEnvelope />,
  },
]

interface NavProps {
  activeSection: any
}
const Nav: FC<NavProps> = ({ activeSection }) => {
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed  h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen '>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center md:gap-y-10 px-4 md:px-40 xl:px-0 h-[40px]  xl:h-max md:py-8 bg-white/10 backdrop-blur-sm text-lg md:text-xl xl:rounded-full'>
        {navData.map((link, index) => {
          return (
            <Link
              key={index}
              className={`${
                link.name === activeSection ? 'text-accent' : ''
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
            >
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
              </div>

              {/* icons */}
              <div> {link.icon}</div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Nav
