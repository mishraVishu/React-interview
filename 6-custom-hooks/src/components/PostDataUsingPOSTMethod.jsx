import React from 'react'
import useFetch from '../hooks/useFetch';

const PostDataUsingPOSTMethod = () => {
    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts', {
        method:"POST", 
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
            }),
    });

    if(loading) return <div>Loading...</div>
    if(error) return <div style={{color:'red'}}>{error.message}</div>
    return (
        <div>
            {data && (
                 <div>
                    <h3>Created Post:</h3>
                    <div>ID: {data.id}</div>
                    <div>Title: {data.title}</div>
                    <div>Body: {data.body}</div>
                </div>
            )}
        </div>
   )
}

export default PostDataUsingPOSTMethod;