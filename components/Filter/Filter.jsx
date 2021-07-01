import React from 'react'
import { useState } from 'react';
import style from './filter.module.css'

const Filter = (props) => {
    const [filterData, setFilterData] = useState([1,2,3,4])
    return (  
        <div className={style.FilterContainer}>
            <h2>{props.name}</h2>
            {console.log(props.properties)}
            {filterData && filterData.length>0 && filterData.map((el)=> (
                <div className={style.filterContent}>
                    <input type="checkbox" name={el} id="" value />
                    <span>{el}</span>
                </div>
            ))}

        </div>
    );
}
 
export default Filter;