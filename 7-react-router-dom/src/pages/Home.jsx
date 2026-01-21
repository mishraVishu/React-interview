import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';


const Home = () => {
  
  return (
    <div className='header'>
      <div>
        <NavLink to="/auth/login">Login</NavLink>
        <NavLink to="/auth/signup">SignUp</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Home;