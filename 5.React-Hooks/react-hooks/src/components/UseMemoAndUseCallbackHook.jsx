import {useCallback, useMemo, useState} from 'react'

const UseMemoAndUseCallbackHook = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(100);

    const squaredCounterUseMemo = useMemo(() => {
        console.log('Expoensive operation');
        return counter*counter;
    },[counter]);

    const squaredValueUsingCallback = useCallback(() => {
        console.log('Expoensive operation', counter2);
        return counter*counter;
    },[counter]) // re-initialiuzes function only when counter values changes 

  return (
    <div>
        <h3>usememo and useCallback Hook</h3>
        <h4>Question 1. What is useMemo in React?</h4>
        {
            <>
                <p>- It is used to memoize the result of a function and cache it, recalculating only when dependancy chnges.</p>
                <p>Squared Count: {squaredCounterUseMemo}</p>
                <p>Squaed Count: {squaredValueUsingCallback()}</p>
                <button onClick={() => setCounter(counter+1)}>Increment</button>
                <p>{counter2}</p>
                <button onClick={() => setCounter2(counter2-1)}>Decrement</button>
            </>
        }
        <h4>Question 2. When to use  useMemo in React?</h4>
        {
           <>
             <p>- When the computation is expensive and time taking</p>
             <p>- When you want to prevent un-necessary re-computation of values across re-renders</p>
           </>
        }
        <h4>Question 3. How does useMemo differ from useState?</h4>
        {
            <>
            <p>- useMemo memoizes a computed values and returns the cached value without causing re-render</p>
            <p>- useState manages the state and triggers re-render whenever state changes.</p>
            </>
        }
        <h4>Question 4. What is useCallback in React?</h4>
        {
            <>
            <p>It is a hook used to memoize a provided callback function, returning the memoized version of the function</p>
            </>
        }
        <h4>Question 5. What happens when you use useCallback with empty dependencies?</h4>
        {
            <>
                <p>It will return the same memoized function on evevry render, which might be use ful fo performance optimization. if used without any dependency array then it would work like a refular function which will be re-initialized every time component renders. </p>
            </>
        }
        <h4>Question 6. When should you not use useCallback and useMemo?</h4>
        {
            <>
                <p>- In Event handlers and inline functions. </p>
                <p>- Excessive memory consumption</p>
                <p>- Garbage collection concerns</p>
            </>
        }
    </div>
  )
}

export default UseMemoAndUseCallbackHook