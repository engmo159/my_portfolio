'use client'

import {
  IBackground,
  IBackgroundMask,
  IFullScreen,
  IInteractivity,
  IManualParticle,
  IParticlesOptions,
  IResponsive,
  ITheme,
  RangeValue,
  RecursivePartial,
  SingleOrMultiple,
} from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useMemo, useState } from 'react'
import { loadFull } from 'tsparticles'
// import type { IOptions } from 'tsparticles/dist/Options/Interfaces/IOptions'

const ParticlesContainer = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = (container: any) => {
    console.log(container)
  }

  const options: any = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: {
          value: '',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'repulse',
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize: {
            enable: true,
            delay: 0.5,
          },
        },
        modes: {
          push: {
            quantity: 90,
            distance: 200,
            duration: 15,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: '#e68e2e',
        },
        links: {
          color: '#f5d393',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: { enable: true },
        move: {
          direction: 'none', // Make sure this is one of the valid options
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            // height: 30,
            // width: 30,
          },
          value: 150,
        },
        opacity: {
          value: 0.9,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  )

  return (
    <Particles
      className='w-full h-full absolute translate-z-0'
      id='tsparticles'
      // init={particlesLoaded}
      options={options}
    />
  )
}

export default ParticlesContainer
