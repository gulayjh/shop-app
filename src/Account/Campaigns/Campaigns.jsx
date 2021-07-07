import React, { useEffect, useState } from 'react'
import style from './campaigns.module.css'
import axios from 'axios';
import { baseURL, getUserToken } from '../../../utils';
const Campaigns = (props) => {
    const token = getUserToken()
    const [data, setData] = useState('')
    console.log(props.phonenumber, "asassa");
    
    useEffect(() => {
        axios.get(baseURL + `Order/GetCampaigns?phonnumber=${props}`)
            .then(response => setData(response.data.obj));
    }, [])
    return (
        <div>

        </div>
    );
}

export default Campaigns;
