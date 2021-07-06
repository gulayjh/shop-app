import React, { useEffect, useState } from 'react'
import style from './orders.module.css'
import axios from 'axios';
import { baseURL, getUserToken } from '../../../utils';
const Orders = (props) => {
    const token = getUserToken()
    const [data, setData] = useState('')

    useEffect(() => {
        axios.get(baseURL + `Order/GetOrders?token=${token}&lng=en`)
            .then(response => setData(response.data.obj));
    }, [])
    return (
        <div>

        </div>
    );
}

export default Orders;
