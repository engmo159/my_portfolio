import Link from 'next/link'
import {
  RiFacebookBoxLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa'

const Socials = () => {
  const phoneNumber = '+201111030337'
  const message = 'Hello, I have a question about your services!'
  return (
    <div className='flex items-center gap-x-5 text-lg lg:text-3xl'>
      <Link
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`}
        className='hover:text-accent transition-all duration-300'
        target='_blank'
      >
        <FaWhatsapp />
      </Link>
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
