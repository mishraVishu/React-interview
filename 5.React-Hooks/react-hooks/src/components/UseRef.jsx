import {useState , useRef, useEffect} from 'react'

const UseRef = () => {
   const [count, setCount] = useState(0);
   const ref = useRef(null);
   const inputRef = useRef(null);

   useEffect(()=>{
    inputRef?.current?.focus();
   },[])

   console.log('re-render');
   console.log(inputRef);

  return (
    <div>
        <h3>useRef</h3>
        <h4>Question 1. What is useRef in React?</h4>
        {
            <>
                <p>1. useRef is a hook which is used to create mutable reference that persists across renders.</p>
                <p>2. It returns a mutable object with.current property.</p>
                <p>Ref value: {ref.current}</p>(Value persists across renders and value is updating but useRef doesn't trigger re-render of component)
                <div>
                    <button onClick={()=>{ref.current+=1}}>Increment Ref</button>
                </div>
                <p>State Value: {count}</p>(triggers re-render of component)
                <div>
                    <button onClick={()=>{setCount(count+1)}}>Increment State</button>
                </div>
            </>
        }
        <h4>Question 2. When would you use useRef?</h4>
        {
            <>
                <ul>
                    <li>Accessing DOM elements and managing focus</li>
                    <li>Storing mutable values that persists without causing re-renders.</li>
                </ul>
                <input ref={inputRef} />
                <button onClick={()=>{ inputRef.current.value = 5; inputRef.current.focus()}}>Set Focus</button>
            </>
        }
        <h4>Question 3. How do you access DOM elements using useRef?</h4>
        <h4>Question 4. Difference between useState and useRef?</h4>
        {
            <>
                <ul>useState - 
                    <li>Manage states and trigger re-renders when its value changes.So we update the value using setState and that causes re-render of components.</li>
                </ul>

                <ul>useRef - 
                    <li>used for storing mutable values which persists across re-renders without causing re-render of components.So we can mutate the value using ref.current that won't trigger re0render but value will be updated and we can access it across renders.</li>    
                </ul>    

            </>
        }
    </div>
  )
}

export default UseRef