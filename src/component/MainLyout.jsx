import React, { memo } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Foter from './Foter'

const MainLyout = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Outlet/>
      </div>
      <div>
        <Foter/>
      </div>
    </div>
  )
}

export default MainLyout
