import { useRef } from 'react';

// This is a learning/educational polyfill for useEffect, not for production use!
const UseEffectPolyfill = (callback, deps) => {
    const isFirstRender = useRef(true);
    const prevDeps = useRef();
    const cleanupRef = useRef();

    // Dependency check function (shallow)
    const depsChanged = () => {
        if (!prevDeps.current) return true;
        if (!deps) return true;
        if (deps.length !== prevDeps.current.length) return true;
        for (let i = 0; i < deps.length; i++) {
            if (deps[i] !== prevDeps.current[i]) return true;
        }
        return false;
    };

    // Run effect on first render or if dependencies changed
    if (isFirstRender.current || depsChanged()) {
        // Run cleanup from previous effect if present
        if (typeof cleanupRef.current === 'function') {
            cleanupRef.current();
        }
        // Run the effect and store cleanup
        cleanupRef.current = callback();
        isFirstRender.current = false;
        prevDeps.current = deps;
    }
    // Note: This will NOT run cleanup on component unmount (cannot do this without useEffect)
};

export default UseEffectPolyfill;