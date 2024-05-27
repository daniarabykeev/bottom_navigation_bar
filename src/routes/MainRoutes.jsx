import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/homePage/HomePage'
import Messages from '../pages/messages/Messages'
import SettingsPage from '../pages/settingsPage/SettingsPage'
import UserProfilePage from '../pages/userProfilePage/UserProfilePage'
import AddDataPage from '../pages/addData/AddDataPage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route element={<MainLayout/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/msg' element={<Messages/>}/>
            <Route path='/settings' element={<SettingsPage/>}/>
            <Route path='/profile' element={<UserProfilePage/>}/>
            <Route path='/adddata' element={<AddDataPage/>}/>
        </Route>
    </Routes>
  )
}

export default MainRoutes