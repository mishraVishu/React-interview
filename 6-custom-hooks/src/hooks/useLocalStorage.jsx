import { useState } from "react";

const useLocalStorage = (key, initialValue = 'Guest') => {
    let initial;
    try {
        const storedValue = typeof window !== "undefined" ? localStorage.getItem(key) : null;
        initial = storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
        initial = initialValue;
    }

    const [value, setValue] = useState(initial);

    // Check for browser environment and key after hook
    const isBrowser = typeof window !== "undefined";
    if (!isBrowser) {
        return [initialValue, () => {}, () => {}];
    }
    if (!key) {
        throw new Error('Key must be provided to store value in LocalStorage.')
    }

    const set = (newValue) => {
        try {
            const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
            setValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    }

    const remove = () => {
        try {
            localStorage.removeItem(key);
            setValue(initialValue);
        } catch (error) {
            console.log(error);
        }
    }

    return [value, set, remove];
}

export default useLocalStorage;