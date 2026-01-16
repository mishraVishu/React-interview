import { useEffect, useState } from 'react'

const useDebounce = (value,delay,cb) => {
  const [debouncedValue, setDebouncedValue] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
        setDebouncedValue(value);
        cb();
    },delay)

    return () => {
        clearTimeout(handler);
    }
  },[value,delay])

  return debouncedValue;
}

export default useDebounce;