import React from 'react'
import { Link, NavLink, useNavigate, useNavigation } from 'react-router-dom';
import '../App.css';

const Headers = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  console.log(isLoading)
 return (
   <header className='header'>
        {/* <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link> */}
        <div>
            <NavLink className={({isActive,isPending, isTransitioning}) => [
            isActive ? 'active': '',
            isPending ? 'pending' : '',
            isTransitioning ? 'transitioninh' : ''
          ].join(" ")} to="/">Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </div>
        <div>
          {isLoading && <h3>Loading...</h3>}
        </div>
   </header>
  )
}

export default Headers;