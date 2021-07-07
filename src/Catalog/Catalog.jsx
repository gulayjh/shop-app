import axios from 'axios';
import { baseURL, getUserToken } from '../../utils';
import React, { useState, useEffect } from 'react'
import style from './catalog.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';


const Catalog = () => {
    const { query: { id } } = useRouter()
    const [data, setData] = useState('')

    useEffect(() => {
        axios.get(baseURL + `GoodsList/getgoodslist?selectedCatIds=${id}&lng=en&token=string`)
            .then(response => setData(response.data.obj));
    },[id])
console.log(data);
    return (
        <div>
            catalog {id}
        </div>
    );
}

export default Catalog;