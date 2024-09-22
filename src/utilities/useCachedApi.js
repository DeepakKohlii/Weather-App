import { useState, useEffect } from "react";
import { API_BASE_URL } from "./constants";

const DefaultTTL = 60000; 

const useCachedAPI = (url, setFunction = () => {}, avoidInitialFetch = false, ttl = DefaultTTL) => {
    const [cachedData, setCachedData] = useState({ data: null, timestamp: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (hardRefresh = true) => {
        try {
            setIsLoading(true);

            const cachedItem = localStorage.getItem(url);
            if (cachedItem && !hardRefresh) {
                const parsedCachedData = JSON.parse(cachedItem);
                if (Date.now() - parsedCachedData.timestamp < ttl) {
                    setCachedData(parsedCachedData);
                    setIsLoading(false);
                    setFunction(parsedCachedData.data);
                    return;
                }
            }

            const response = await fetch(API_BASE_URL + url);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();

            const newCachedData = {
                data,
                timestamp: Date.now(),
            };
            localStorage.setItem(url, JSON.stringify(newCachedData));

            setCachedData(newCachedData);
            setFunction(newCachedData.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        let mounted = true;
        if (mounted && !avoidInitialFetch) fetchData(false);

        return () => {
            mounted = false;
        };
    }, [url, ttl]);

    return { data: cachedData.data, loading: isLoading, error, fetchData };
};

export const useCache = useCachedAPI;
