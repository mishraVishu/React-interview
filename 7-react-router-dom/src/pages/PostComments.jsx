import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PostComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(null);
  const [post, setPosts] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchPosts = async() => {
    try{
      setLoading(true)
    const [postResponse, commentsResponse] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    ]);
    const data1 = await postResponse.json();
    const data2 = await commentsResponse.json();

    setPosts(data1);
    setComments(data2);

    }catch(e){
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  },[id])

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <h3>Comments</h3>
          <ul>
            {comments.map(comment => (
              <li key={comment.id}>
                <strong>{comment.name}</strong>: {comment.body}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default PostComments;