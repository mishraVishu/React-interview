import React from 'react'
import { Link, NavLink, useNavigation } from 'react-router-dom';
import '../App.css';

const Headers = () => {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === 'loading';
  // console.log(isLoading)
 return (
   <header>
        {/* <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link> */}
        <div className='header'>
            <NavLink className={({isActive,isPending, isTransitioning}) => [
            isActive ? 'active': '',
            isPending ? 'pending' : '',
            isTransitioning ? 'transitioning' : ''
          ].join(" ")} to="/auth">Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/products">Products</NavLink>
        </div>
        <div>
          {/* {isLoading && <h3>Loading...</h3>} */}
        </div>
   </header>
  )
}

export default Headers;