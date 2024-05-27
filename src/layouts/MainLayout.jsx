import React from 'react'
import BottomNavbar from '../components/bottomNavbar/BottomNavbar'
import { Outlet } from 'react-router-dom'
import './MainLayout.css'

const MainLayout = () => {
  return (
    <div className="main-layout">
    <div className="content">
        <Outlet/>
    </div>
    <div className="bottom-navbar">
        <BottomNavbar/>
    </div>
</div>
  )
}

export default MainLayout