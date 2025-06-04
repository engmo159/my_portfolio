/* eslint-disable react/no-unescaped-entities */
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
import ParticlesContainer from '../components/ParticlesContainer'

const Main = () => {
  return (
    <main className='bg-primary/60 h-screen' role='main'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-evenly pt-4 md:pt-8  xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <h1
            className='text-2xl md:text-4xl lg:h1 lg:pb-0'
            itemProp='headline'
          >
            Building Dreams <br />
            Into <span className='text-accent'>Web Solutions</span>
          </h1>
          {/* subtitle */}
          <p
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 lg:mt-4 mb-10 xl:mb-16'
            itemProp='description'
          >
            I am{' '}
            <span className='text-white' itemProp='name'>
              Eng Mohamed Saeed
            </span>
            , a full stack developer, enthusiastic about crafting seamless and
            engaging web experiences. Let's turn your vision into a digital
            reality together.
          </p>
          {/* btn */}
          <nav
            className='flex justify-center xl:hidden relative z-20'
            aria-label='Main navigation'
          >
            <ProjectsBtn />
          </nav>
          <div>
            <nav className='hidden xl:flex' aria-label='Main navigation'>
              <ProjectsBtn />
            </nav>
          </div>
        </div>
      </div>
      {/* image */}
      <div
        className='w-full h-full absolute right-0 bottom-0'
        role='complementary'
        aria-label='Visual elements'
      >
        {/* big image */}
        <div
          className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'
          role='presentation'
          aria-hidden='true'
        ></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar image  */}
        <div
          className='w-full h-full max-w-[452px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
          role='img'
          aria-label='Developer avatar'
        >
          <Avatar hover />
        </div>
      </div>
    </main>
  )
}

export default Main
