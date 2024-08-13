'use client'

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Translator ',
          path: '/translator.png',
          src: 'https://translator-project-nine.vercel.app/',
          width: 753,
          height: 450,
        },

        {
          title: 'Dokan Shop',
          path: '/laptop.png',
          src: 'https://dokanshop-mohamedsaeed.vercel.app/',
          width: 753,
          height: 450,
        },
        {
          title: 'ECommerce',
          path: '/Screenshot 2024-06-24 083849.png',
          src: 'https://ecommerce-amber-ten-52.vercel.app/',
          width: 1396,
          height: 793,
        },
        {
          title: 'Admin Dashboard',
          path: '/Screenshot 2024-06-24 094146.png',
          src: 'https://drive.google.com/file/d/1uj0TiBfMpEKDXFqfQQMgHtwr1GqK20x0/view?usp=sharing',
          width: 1761,
          height: 751,
        },
      ],
    },
    {
      images: [
        {
          title: 'LMS & Exam',
          path: '/Screenshot 2024-06-24 100252.png',
          src: 'https://lms-exam-app.vercel.app/',
          width: 1410,
          height: 782,
        },
      ],
    },
  ],
}
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
// import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper/modules'

import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      // pagination={{ clickable: true }}
      modules={[Navigation]}
      className='h-[280px]  sm:h-[480px] lg:h-[640px] '
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                  >
                    <Link href={image.src} target='_blank'>
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        {/* image */}
                        <Image
                          src={image.path}
                          width={image.width}
                          height={image.height}
                          alt=''
                        />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[.2em]'>
                            {/* title part 1 */}
                            <div className='delay-100'>{image.title}</div>
                            {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                              App
                            </div>
                            {/* icon */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default WorkSlider
