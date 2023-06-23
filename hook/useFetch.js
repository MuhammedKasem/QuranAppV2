import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = ( endpoint ) => {
    const [data, setData] = useState(null); // Initialize data as null, not an array
    const [isLoading, setIsLoading] = useState(true); // Initialize isLoading as true
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `http://api.alquran.cloud/v1/${endpoint}`,
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request (options);
            setData(response.data.data);
        } catch (error) {
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [endpoint]);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return {data, isLoading, error, refetch }
}

export default useFetch;
