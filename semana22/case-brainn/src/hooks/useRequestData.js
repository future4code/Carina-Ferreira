import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData);
    console.log(data);
    const getData = () => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data.results);
            })
            .catch((error) => {
                console.log(error)
                console.log("Ocorreu um erro, tente novamente!");
            });
    };

    useEffect(() => {
        getData();
    }, [url]);

    return [data, getData]
};

export default useRequestData