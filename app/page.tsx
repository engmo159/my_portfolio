'use client'
import { useState } from 'react'
import Nav from './components/Nav'
import Home from './sections/Home'
import TopLeftImg from './components/TopLeftImg'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainPage = () => {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <>
      <TopLeftImg />
      <Nav activeSection={activeSection} />
      <Header />
      <Home setActiveSection={setActiveSection} />
      <ToastContainer />
    </>
  )
}

export default MainPage
