import { Link, useLoaderData, useNavigation } from 'react-router-dom';

const PostLists = () => {
  const posts = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  return (
    <div>
      {posts?.map(item => (
        <div style={{ border:'1px solid grey', padding:'1rem', marginBottom:'1rem'}} key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <Link to={`/posts/${item.id}`}>View Comments</Link>
        </div>
      ))}
    </div>
  );
}

export async function PostsLoader(){
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50');
    if (!res.ok) throw new Error('Failed to fetch posts');
    const data = await res.json();
    return data;
  } catch (error) {
    throw error; // This will be caught by errorElement
  }
}

export default PostLists;