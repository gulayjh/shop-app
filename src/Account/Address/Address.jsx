import React, { useEffect, useState } from 'react'
import style from './address.module.css'
import axios from 'axios';
import { baseURL, getUserToken } from '../../../utils';
const Address = () => {
    const token = getUserToken()
    const [data, setData] = useState('')
    
    useEffect(() => {
        axios.get(baseURL + `Account/GetClientAddresses?token=string`)
            .then(response => setData(response.data.obj));
    }, [])
    return (
        <div>

        </div>
    );
}

export default Address;
