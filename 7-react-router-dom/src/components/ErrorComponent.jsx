import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorComponent = () => {
    const error = useRouteError();
    console.log(error);
    
  return (
    <div style={{ color: 'red' }}>
    <h2>Error loading posts!</h2>
    <h3>{error.status}</h3>
    <h3>{error.message || error.data}</h3>
    <p>Please try again later.</p>
  </div>
  )
}

export default ErrorComponent