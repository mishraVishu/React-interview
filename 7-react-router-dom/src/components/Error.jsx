import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error);

    const navigate = useNavigate();
    
  return (
    <div>
        <h2>Something went wrong!</h2>
        <h3>{error.status} {error.statusText}</h3>
        <p>{error.data || error.message}</p>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default Error;