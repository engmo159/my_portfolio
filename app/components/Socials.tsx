import Link from 'next/link'
import {
  RiFacebookBoxLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg lg:text-3xl'>
      <Link
        href={'https://www.facebook.com/profile.php?id=100089993231546'}
        className='hover:text-accent transition-all duration-300'
        target='_blank'
      >
        <RiFacebookBoxLine />
      </Link>
      <Link
        href={'https://github.com/engmo159'}
        className='hover:text-accent transition-all duration-300'
        target='_blank'
      >
        <RiGithubFill />
      </Link>
      <Link
        href={'https://www.linkedin.com/in/mohamed-saeed-web/'}
        className='hover:text-accent transition-all duration-300'
        target='_blank'
      >
        <RiLinkedinBoxFill />
      </Link>
    </div>
  )
}

export default Socials
