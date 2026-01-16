import { useEffect, useState } from "react";

const useFetch = (url, options = { method: 'GET' }) => {
    const [state, setState] = useState({
        data: null,
        loading: false,
        error: null
    })

    const fetchData = async (url) => {
        try {
            setState(prev => ({ ...prev, loading: true, error: null, data: null }));
            const res = await fetch(url, { ...options });
            if (!res.ok) {
                throw new Error("Network request failed, Failed while fetching data");
            }
            const data = await res.json();
            setState(prev => ({ ...prev, data: data, loading: false }));
        } catch (error) {
            setState(prev => ({ ...prev, error: error, loading: false }));
        }
    }

    useEffect(() => {
        fetchData(url);
        // eslint-disable-next-line
    }, [url]);

    return state;
}

export default useFetch;