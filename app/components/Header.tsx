import Link from 'next/link'
import Socials from './Socials'

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-y-2 py-4 xl:py-8'>
          {/* logo */}
          <Link href={'/'} className='group m-0 md:mt-4 md:pt-0 '>
            <h2 className='text-lg lg:text-3xl group-hover:text-accent transition-all duration-300'>
              <span className='text-accent group-hover:text-white/50 transition-all duration-300'>
                Eng.{' '}
              </span>
              <span className='font-normal inline-block'>Mohamed Saeed</span>
            </h2>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header
