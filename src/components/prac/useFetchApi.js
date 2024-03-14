import { useState, useEffect } from 'react';

const useFetchApi = (url = '', options = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url, options).then((res) => res.json()).then((data) => {
            console.log(data)
            setData(data);
            setError(null);
        }).catch((err) => {
            setError(err)
            setData(null)
        }).finally(() => setLoading(false))
    }, [url, options]);

    return (
        { data, error, loading }
    ) 

}

export default useFetchApi