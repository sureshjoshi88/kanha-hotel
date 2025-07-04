import React, { memo } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Foter from './Foter'

const MainLyout = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Foter/>
      </footer>
    </div>
  )
}

export default MainLyout
