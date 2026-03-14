import { useState, useEffect } from "react";


export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [itemId, setItemId] = useState(null);


    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                Headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        } else if (method === "DELETE") {
            setConfig({
                method,
                Headers: {
                    "Content-type": "application/json",
                },
            });
            setMethod(method);
            setItemId(data);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                setError(false)
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (error){
                console.log(error.massage);
                setError("Houve algum error ao carregar os dados!")
            }
            setLoading(false);
        };
        fetchData();

    },[url , callFetch]);

    useEffect(() =>{
        const httpRequest = async () => {
            let json
            if(method === "POST") {
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                const json =  await res.json();
            } else if (method === "DELETE") {
                const deleteUrl = `${url}/${itemId}`
                const response = await fetch(deleteUrl, config)
                const json = await response.json()
            }
            setCallFetch(json);
        };
        httpRequest();
    }, [config, method, url]);

    return{ data, httpConfig, loading, error };
};
