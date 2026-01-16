import React, { useMemo, useRef } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// The Intersection Observer API is a modern browser interface that provides a high-performance, asynchronous way to detect when a target element enters or exits the viewport, or intersects with a specified ancestor element 

// threshold option determines how much of the target element must be visible in the viewport before the observer's callback is triggered.

const IntersectionElement = () => {

    const options = useMemo(() => ({
        root: null,
        rootMargin:"0px",
        threshold: 0.5
    }),[])

    const ref = useRef(null);

    const intersectionEntry = useIntersectionObserver(ref,options);
    
    console.log('isInrersecting',intersectionEntry?.isIntersecting);
    console.log('isIntersetion Ratio', intersectionEntry?.intersectionRatio)

  return (
    <div style={{ height:"200vh", background:intersectionEntry?.isIntersecting ? 'white' :'grey' }}>
        <div ref={ref} style= {{ height:"50vh", background: "lightblue"}}>Vaishali</div>
    </div>
  )
}

export default IntersectionElement