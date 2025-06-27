import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const MainLyout = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLyout
