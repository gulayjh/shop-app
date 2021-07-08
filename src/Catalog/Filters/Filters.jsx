import React from 'react'
import style from './filters.module.css'
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';

const Filters = ({ filterData }) => {
    const [showFilter, setShowFilter] = useState(false)
    const [filterName, setFilterName] = useState()

    const categoryName = Object.keys(filterData)

    const handleFilterClick = (name) => {
        if (filterName === name) {
            setShowFilter(false)
            setFilterName(null)
        } else {
            setShowFilter(true)
            setFilterName(name)
        }
    }
    console.log(showFilter);
    return (
        <div className={style.FilterContent}>
            {categoryName.map((name) => (
                <div>
                    <button onClick={() => { handleFilterClick(name) }}>
                        {name} <IoIosArrowDown />
                    </button>

                    {filterName == name && showFilter && filterData[name] && filterData[name].length && filterData[name].map((item) => (
                        <div className={style.FilterCheckboxContent}>
                            <input type="checkbox" value={item.id} />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            ))}
            <button>click</button>
        </div>
    );
}

export default Filters;
