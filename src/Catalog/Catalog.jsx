import axios from 'axios';
import { baseURL, getUserToken } from '../../utils';
import React, { useState, useEffect } from 'react'
import style from './catalog.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
import CatalogContent from './CatalogContent/CatalogContent'
import Filters from './Filters/Filters';
import PriceSlider from '../../components/PriceSlider/PriceSlider'


const Catalog = () => {
    const { query: { id } } = useRouter()
    const [data, setData] = useState('')
    const [filterData, setFilterData] = useState('')

    useEffect(() => {
        if(id){
            loadData()
            loadFilterData()
        }
    }, [id])

    const loadData = () => {
        axios.get(baseURL + `GoodsList/getgoodslist?selectedCatIds=${id}&lng=en&token=string`)
            .then(response => setData(response.data.obj));
    }

    const loadFilterData = () => {
        axios.get(baseURL + `GoodsList/GetFilters?lng=en&categoryId=${id}`)
            .then(response => setFilterData(response.data.obj));
    }

    return (
        <div className={style.CatalogContainer}>
            <div>
                <Filters
                    filterData={filterData}
                />

            </div>
            <div>
                <CatalogContent
                    data={data}
                />
            </div>
        </div>
    );
}

export default Catalog;