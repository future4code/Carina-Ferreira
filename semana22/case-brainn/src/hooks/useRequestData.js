import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url, objectkey) => {
    const [data, setData] = useState(initialData);
    console.log(data);
    const getData = () => {
        axios
            .get(url)
            .then((response) => {
                if(objectkey) {
                    setData(response.data[objectkey]);
                }else{
                    setData(response.data);
                }
             
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