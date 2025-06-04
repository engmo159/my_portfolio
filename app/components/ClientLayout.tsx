'use client'

import { useState } from 'react'
import Nav from './Nav'
import Home from '../sections/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ClientLayout = () => {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <>
      <Nav activeSection={activeSection} />
      <Home setActiveSection={setActiveSection} />
      <ToastContainer />
    </>
  )
}

export default ClientLayout
