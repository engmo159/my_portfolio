// fonts
import { Sora } from 'next/font/google'

//fonts settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

// component
import Nav from './Nav'
import Header from './Header'
import TopLeftImg from './TopLeftImg'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div
      className={`Page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative `}
    >
      <Nav />
      <Header />
      <TopLeftImg />
      {children}
    </div>
  )
}

export default Layout
