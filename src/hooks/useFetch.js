import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const res = await fetch(url);
                if (!res.ok) throw new Error("somthing  wont wrong!");
                const data = await res.json();
                setData(data?.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
            }
        };
        getData();
    }, [url]);
    return { data, loading, error };
};

export default useFetch;
