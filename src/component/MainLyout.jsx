import React, { memo } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Foter from './Foter'
import { useTheme } from '../themeContext/UseTheme'

const MainLyout = () => {
    const { theme, setTheme } = useTheme()
  
  return (
    <div>
      <header className={`fixed top-0 w-full z-50 ${theme==='light'?'bg-gray-50':'bg-black'}`}>
        <Navbar/>
      </header>
      <main className='mt-14 md:mt-34 '>
        <Outlet/>
      </main>
      <footer className='mt-4'>
        <Foter/>
      </footer>
    </div>
  )
}

export default MainLyout
