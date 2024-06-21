'use client'

import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useMemo, useState } from 'react'
import { loadFull } from 'tsparticles'

const ParticlesContainer = () => {
  const [init, setInit] = useState(false)
  // this should be run only once per application lifetime

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
  const options = useMemo(
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
          direction: 'none',
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
      init={particlesLoaded}
      options={options}
    />
  )
}

export default ParticlesContainer

// import Particles, { initParticlesEngine } from '@tsparticles/react'
// import { useEffect, useMemo, useState } from 'react'
// // import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// // import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from '@tsparticles/slim' // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// // import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

// const ParticlesComponent = props => {
//   const [init, setInit] = useState(false)
//   // this should be run only once per application lifetime
//   useEffect(() => {
//     initParticlesEngine(async engine => {
//       // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//       // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//       // starting from v2 you can add only the features you need reducing the bundle size
//       //await loadAll(engine);
//       //await loadFull(engine);
//       await loadSlim(engine)
//       //await loadBasic(engine);
//     }).then(() => {
//       setInit(true)
//     })
//   }, [])

//   const particlesLoaded = container => {
//     console.log(container)
//   }

//   const options = useMemo(
//     () => ({
//       background: {
//         color: {
//           value: '#1E2F97',
//         },
//       },
//       fpsLimit: 120,
//       interactivity: {
//         events: {
//           onClick: {
//             enable: true,
//             mode: 'repulse',
//           },
//           onHover: {
//             enable: true,
//             mode: 'grab',
//           },
//         },
//         modes: {
//           push: {
//             distance: 200,
//             duration: 15,
//           },
//           grab: {
//             distance: 150,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: '#FFFFFF',
//         },
//         links: {
//           color: '#FFFFFF',
//           distance: 150,
//           enable: true,
//           opacity: 0.3,
//           width: 1,
//         },
//         move: {
//           direction: 'none',
//           enable: true,
//           outModes: {
//             default: 'bounce',
//           },
//           random: true,
//           speed: 1,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//           },
//           value: 150,
//         },
//         opacity: {
//           value: 1.0,
//         },
//         shape: {
//           type: 'circle',
//         },
//         size: {
//           value: { min: 1, max: 3 },
//         },
//       },
//       detectRetina: true,
//     }),
//     []
//   )

//   return <Particles id={props.id} init={particlesLoaded} options={options} />
// }

// export default ParticlesComponent
