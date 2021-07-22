import React, { useState, useEffect } from 'react'
import axios from 'axios';
import style from "./saleTag.module.css"
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { getUserToken, baseURL } from '../../utils';

const SaleTag = ({ id }) => {
    const [addedToFav, setAddedToFav] = useState(false)
    const [selectedId, setSelectedId] = useState()
    const token = getUserToken()
    const data = {
        token: token,
        goodsId: selectedId
    }
    useEffect(() => {
        if (selectedId) {

            axios.post(baseURL + `Favorite/addtofav`, data)
                .then(response => console.log(response.data.obj));
        }
    }, [addedToFav])

    const handleAddToFav = (value) => {
        if (addedToFav) {
            setAddedToFav(false)
            setSelectedId(value)
        } else {
            setAddedToFav(true)
            setSelectedId(value)
        }
    }
    return (
        <div className={style.SaleTag}>
            <button onClick={() => { handleAddToFav(id) }}>
                {addedToFav ? <BsHeartFill /> : <BsHeart />}
            </button>

        </div>
    );
}

export default SaleTag;