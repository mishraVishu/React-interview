import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleReSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
  
  useEffect(() => {
    window.addEventListener('resize',handleReSize)
    return () => {
        window.removeEventListener('resize',handleReSize );
    }
  })

  return windowSize
}

export default useWindowSize;