import React, { useMemo, useState, useRef, useEffect } from 'react'

const UseMemoPolyfill = () => {
    const [counter,setCounter] = useState(0);
    const [counter2, setCounter2] = useState(100);

    const squaredValue = () => {
        console.log('Expensive calculation')
        return counter*counter;
    }

    const memoizedSquaredValue = useCustomMemo(squaredValue, [counter])

  return (
    <div>
        <h3>useMemo Polyfill</h3>
        <h4>Count: {counter}</h4>
        <h4>Count 2: {counter2}</h4>
        {/* <h2>SquaredCounter : {squaredValue()}</h2> */}
        <h4>MwmoizedValue : {memoizedSquaredValue}</h4>
        <button onClick={() => setCounter(counter+1)}>Increment</button>
        <button onClick={() => setCounter2(counter2-1)}>Decrement</button>
    </div>
  )
}

const useCustomMemo = (cb,deps) => {
     //variable or state - cached value
    const cachedValue = useRef(null);

    const areEqual = (prevDeps, newDeps) => {
        if(!newDeps){
            return false;
        }

        if(prevDeps.length !== newDeps.length){
            return false;
        }

        for(let i=0; i<newDeps.length; i++){
            if(prevDeps[i] !== newDeps[i]){
                return false;
            }
        }
        return true;
    }
    
    //change in deps
    if(!cachedValue?.current || !areEqual(cachedValue?.current?.deps, deps)){
        cachedValue.current = {
            value:cb(),
            deps:deps
        }
    }

    //clean up 
    useEffect(() =>{
        return(() => {
            cachedValue.current = null;
        })
    },[])

    //retrun cached value
    return cachedValue?.current?.value;
}

export default UseMemoPolyfill;