import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../../../utils';
import style from './categories.module.css'
import DropDowns from './DropDowns/DropDown'
import Link from 'next/link'

const CategoriesResponsive = () => {
    const [data, setData] = useState('')
    const [showDropDown, setShowDropDown] = useState(false)
    const [categoryId, setCategoryId] = useState()

    useEffect(() => {
        axios.get(baseURL + `Category/getcategories?lng=en`)
            .then(response => setData(response.data.obj));
    }, [])

    const handleClick = (value) => {
        if (value === categoryId) {
            setShowDropDown(false)
            setCategoryId(null)
        } else {
            setCategoryId(value)
            setShowDropDown(true)
        }

    }
    return (
        <div className={style.MenuContent}>
            {data && data.length > 0 && data.map((item) => {
                if (item.parentId === null) {
                    return (
                        <div className={style.CategoryContainer} key={item.id}>
                            <button onClick={() => handleClick(item.id)}>
                                {item.name}
                            </button>
                            {
                                (item.id === categoryId) && showDropDown ?
                                    <div className={style.DropDowns}>
                                        <DropDowns
                                            data={data}
                                            categoryId={categoryId}
                                        />
                                    </div>
                                    : null
                            }
                        </div>
                    )
                }
            })}

        </div >
    );
}

export default CategoriesResponsive;