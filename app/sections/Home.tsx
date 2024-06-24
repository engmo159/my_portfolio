'use client'

import { useEffect, useRef } from 'react'

import Skills from './Skills'
import Work from './Work'
import { useInView } from 'react-intersection-observer'
import Contact from './Contact'
import Main from './Main'

const Home = ({ setActiveSection }) => {
  // ref & active section logic
  const homeRef = useRef(null)
  const skillsRef = useRef(null)
  const workRef = useRef(null)
  const contactRef = useRef(null)
  const { inView: isHomeInView, ref: homeInViewRef } = useInView({
    threshold: 0.5,
  })
  const { inView: isSkillsInView, ref: skillsInViewRef } = useInView({
    threshold: 0.5,
  })
  const { inView: isWorkInView, ref: workInViewRef } = useInView({
    threshold: 0.5,
  })
  const { inView: isContactInView, ref: contactInViewRef } = useInView({
    threshold: 0.5,
  })
  useEffect(() => {
    if (isHomeInView) setActiveSection('home')
    else if (isSkillsInView) setActiveSection('skills')
    else if (isWorkInView) setActiveSection('work')
    else if (isContactInView) setActiveSection('contact')
  }, [
    isHomeInView,
    isSkillsInView,
    isWorkInView,
    isContactInView,
    setActiveSection,
  ])
  // smooth scroll logic
  useEffect(() => {
    const handleScroll = (event: { preventDefault?: any; deltaY?: any }) => {
      const { deltaY } = event
      // event.preventDefault()

      if (deltaY > 0) {
        scrollToNextSection()
      } else {
        scrollToPreviousSection()
      }
    }

    const sections = document.querySelectorAll('.section')
    let currentSectionIndex = 0

    const scrollToNextSection = () => {
      if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' })
      }
    }

    const scrollToPreviousSection = () => {
      if (currentSectionIndex > 0) {
        currentSectionIndex--
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('wheel', handleScroll)

    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])

  return (
    <div className=''>
      <section
        id='home'
        className='h-screen section'
        ref={homeInViewRef || homeRef}
      >
        <Main />
      </section>
      <section
        id='skills'
        className='h-screen section'
        ref={skillsInViewRef || skillsRef}
      >
        <Skills />
      </section>
      <section
        id='work'
        className='h-screen section'
        ref={workInViewRef || workRef}
      >
        <Work />
      </section>

      <section
        id='contact'
        className='h-screen section'
        ref={contactInViewRef || contactRef}
      >
        <Contact />
      </section>
    </div>
  )
}

export default Home
