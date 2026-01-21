import React from 'react'
import { Navigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
  const loggedIn = localStorage.getItem("LoggedIn");

  if(!loggedIn){
    return <Navigate to="/auth/login"/>
  }
  return children; 
    
}

export default RequireAuth