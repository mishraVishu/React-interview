import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const UserInfo = () => {
    const [value, set, remove] = useLocalStorage("username", 'Guest');
  return (
    <div>
        <h3>Hello {value}</h3>
        <input type="text" value={value} placeholder='Enter your name' onChange={(e) => set(e.target.value)}/>
        <button onClick={remove}>Logout</button>
    </div>
  )
}

export default UserInfo