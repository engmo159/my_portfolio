import Image from 'next/image'

interface AvatarProps {
  hover: boolean
}

const Avatar = ({ hover }: AvatarProps) => {
  const myAvatar = (
    <Image
      src='/my picture.png'
      width={452}
      height={678}
      alt='My Real Avatar'
      className='w-full h-full object-cover'
      priority
    />
  )

  const cartoonAvatar = (
    <Image
      src='/1.png'
      width={452}
      height={678}
      alt='Cartoon Avatar'
      className='w-full h-full object-cover'
      priority
    />
  )

  if (hover) {
    return (
      <div className='hidden xl:flex xl:max-w-none group relative w-[452px] h-[678px]'>
        {/* الصورة الأصلية - تظهر أولاً وتختفي عند الـ hover */}
        <div className='absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0'>
          {myAvatar}
        </div>

        {/* الكرتونية - تظهر عند الـ hover */}
        <div className='absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
          {cartoonAvatar}
        </div>
      </div>
    )
  }

  return (
    <div className='hidden xl:flex xl:max-w-none z-50 w-[452px] h-[678px]'>
      <div>{cartoonAvatar}</div>
    </div>
  )
}

export default Avatar
