import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';
import { useTheme } from './theme';

const LightDarkThemeUsingUseContext = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <>
        <h2>Light and dark Theme using useContextHook</h2>
        <nav className='navbar'>
            <Link to="/" className='link'>Home</Link>
            <Link to="/about" className='link'>About</Link>
            <Link to="/blog" className='link'>Blog</Link>
            <button onClick={toggleTheme}>Change Theme</button>
        </nav>
    </>
  )
}

export default LightDarkThemeUsingUseContext;