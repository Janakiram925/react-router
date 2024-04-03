import React, { useState, useEffect } from 'react';

function AsyncDataLoader() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // if we pass async function directly to the useEffect 
    // it gives warning but it will work
    // useEffect takes first argument a function that either returns nothing or return a function to clean up side effects
    // when we pass async function it will return a promise which can't be treated like a function
    // to reduce warning we can implement in a below manner
    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const result = 'data loaded successfully';
                setData(result);
                setLoading(false)

            } catch (error) {
                console.error(`error while fetching data ${error}`)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [])
    return (
        <>
            <span>Async data loader</span>
            <div>
                {
                    loading ? {data} : 'error while loading data'
                }
            </div>
        </>
    )

}
export default AsyncDataLoader