
// import { useEffect } from 'react';
// import { useState } from 'react'
import { Link, useLoaderData, useNavigation } from 'react-router-dom';

const PostLists = () => {

  const posts = useLoaderData();
  console.log(posts);

  // const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState(null);

  // const fetchPosts = async() => {
  //   try{
  //     setIsLoading(true)
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50');
  //   const data = await res.json();
  //   setData(data);
  //   }catch(e){
  //     console.log(e);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchPosts();
  // },[])

  return (
    <div>
      {posts?.map(item => {
        return (
          <div style={{ border:'1px solid grey', padding:'1rem', marginBottom:'1rem'}} key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <Link to={`/posts/${item.id}`}>View Comments</Link>
          </div>
        )
      })}
    </div>
  )
}

export async function PostsLoader(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50');
  const data = await res.json();
  return data;
}

export default PostLists