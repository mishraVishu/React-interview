import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../components/Headers'

const AppLayout = () => {
  return (
    <div>
        <Headers />
        <Outlet />
    </div>
  )
}

export default AppLayout