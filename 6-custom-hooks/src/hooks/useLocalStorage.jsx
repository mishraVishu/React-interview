import { useState } from "react";

const useLocalStorage = (key, initialValue = 'Guest') => {
    const isBrowser = typeof window !== "undefined";
    let initial = initialValue;

    const [value, setValue] = useState(initial);

    if (!isBrowser) {
        return [initialValue, () => {}, () => {}];
    }


    try {
        const storedValue = localStorage.getItem(key);
        if (storedValue === "") {
            localStorage.setItem(key, JSON.stringify(initialValue));
            setValue(initialValue)
        } else {
            initial = JSON.parse(storedValue);
        }
    } catch {
        // fallback to initialValue
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