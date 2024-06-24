import Image from 'next/image'
import { FC } from 'react'

interface AvatarProps {
  hover: boolean
}

const my_avatar = (
  <Image
    src={'/my picture.png'}
    // src={'/avatar.png'}
    width={452}
    height={678}
    // width={737}
    // height={678}
    alt=''
    className='translate-z-0 w-full h-full'
  />
)
const cartoonAvatar = (
  <Image
    src={'/1.png'}
    width={452}
    height={678}
    alt=''
    className='translate-z-0 w-full h-full'
  />
)
const Avatar: FC<AvatarProps> = ({ hover }) => {
  return hover ? (
    <div className='hidden xl:flex xl:max-w-none group'>
      <div className='flex group-hover:hidden transition-all duration-300'>
        {my_avatar}
      </div>
      <div className='hidden group-hover:flex transition-all duration-300'>
        {cartoonAvatar}
      </div>
    </div>
  ) : (
    <div className='hidden xl:flex xl:max-w-none group z-50'>
      <div>{cartoonAvatar}</div>
    </div>
  )
}

export default Avatar
