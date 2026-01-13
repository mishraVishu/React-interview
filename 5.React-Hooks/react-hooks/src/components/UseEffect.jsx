import { useEffect, useLayoutEffect, useState } from 'react'
import UseEffectPolyfill from './polyfills/UseEffectPolyfill';

const UseEffect = () => {
    const [users, setUsers] = useState([]);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                console.log(data);
                setUsers(data);
            } catch (e) {
                console.log('Error while fetching data', e);
            }
        };
        fetchUser();
    }, []);

    UseEffectPolyfill(() => {
        const interval = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);
        //console.log('Effect triggered')

        return () => {
            clearInterval(interval);
            //console.log('Interval cleared');
        }
    }, );

    useEffect(() => {
        console.log('useEffect called')
    }, []);

    useLayoutEffect(() => {
        console.log('useLayoutEffect called')
    }, []);

    // useEffect(()=>{
    //     // side Effect goes here

    //     return () => {
    //         //cleanup function (optional)
    //         // runs on component unmount
    //     }
    // },[
    //     //dependancy array
    // ]);


    return (
        <div>
            <h3>UseEffect</h3>
            <h4>Question 1. What is useEffect in React ?</h4>
            {
                <>
                    <p>UseEffect is a hook in react that allows us to perform side effects after rendering such as fetching Data, subscriptions and manual DOM manipulations.</p>
                </>
            }
            <h4>Question 2. Why is dependancy array used in useEffect</h4>
            {
                <>
                    1. When dependancy array is empty, it runs only once.
                    2. If there is any value inside DA, then every time value changes , effect re-runs.
                    3. if there is no DA, then effect runs after every render.

                    - Handling Dependency Array is important to avoid un-necessary exectution of effect during render, ensures optimizing performance and avoiding potential bugs.
                </>
            }
            <h4>Question 3. Example of useEffect for Data fetching.</h4>
            {
                <>
                    <h5>Posts Data</h5>
                    <ul>
                        {users.splice(0, 5).map(user => { return (<li key={user.id}>{user.title}</li>) })}
                    </ul>
                </>
            }
            <h4>Question 4. Convert major lifecycle methods to useeffect and Explain.</h4>
            {/** already explained */}
            <h4>Question 5. How to perform clean up in useEffect ? Eplain with example.</h4>
            {
                <>
                    <p>1. You can return a cleanup function which will run before effect re-run or when component unmounts</p>
                    <p>2. This is useful for cleaning up subscriptions or event listeners.</p>
                    <p>{seconds}</p>
                </>
            }
            <h4>Question 6. Explain useLayoutEffect and how it is different from useEffect?</h4>{
                <>
                    <ul>useEffect
                        <li>1. Asynchronous - Runs after the render cycle is committed to the screen</li>
                        <li>2. Good for performance - Does not block the browser from painting changes on the screen.</li>
                    </ul>
                    <ul>useLayoutEffect
                        <li>1. Synchronous - Runs immedialtely after the DOM is upadted but before browser prints anything on the screen i.e. before rendering anything.</li>
                        <li>2. Potentially blocking - Can potentially cause delays in the rendering process if the operations are heavy.</li>
                    </ul>
                </>
            }
        </div>

    )
}

export default UseEffect;