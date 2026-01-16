import useFetch from "../hooks/useFetch";

const PostsList = () => {
    // Use GET to fetch the list of posts
    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");

    if(loading){
        return <div>Loading...</div>
    }

    if(error) {
        return <div style={{color: 'red'}}>{error.message}</div>
    }

    return (
        <div>
            {Array.isArray(data) && data.slice(0,5).map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </div>
    )
}

export default PostsList