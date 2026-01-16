import { useState } from "react";

const useCounter = (initialCount = 0, steps = 1) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(count + steps);
    };

    const decrement = () => {
        setCount(count - steps);
    };

    const reset = () => {
        setCount(initialCount);
    };
    
    return {
        increment,
        decrement,
        reset,
        count
    }
}

export default useCounter;