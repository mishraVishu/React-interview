import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const DebouncedInput = () => {
    const [value, setValue] = useState(null);
    const debouncedValue = useDebounce(value,1000,() => {
        console.log('function called');
        
    });

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }
  return (
    <div>
        <p>{debouncedValue}</p>
        <input placeholder='Type something' type="text" value={value} onChange={(e) => onChangeHandler(e)}/>
    </div>
  )
}

export default DebouncedInput;