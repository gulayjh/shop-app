import React from 'react'
import style from './filters.module.css'
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';

const Filters = ({ filterData }) => {
    const [showFilter, setShowFilter] = useState(false)
    const [filterName, setFilterName] = useState()

    // const [selectedColors, setSelectedColors] = useState([])
    // const [selectedSizes, setSelectedSizes] = useState([])
    // const [selectedCategories, setSelectedCategories] = useState([])
    // const [selectedCollections, setSelectedCollection] = useState([])

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
    // const handleCheckBox = (category, id) => {
    //     if (categoryName[0] === category) {
    //         const colorsArray = [...selectedColors]
    //         colorsArray.push(id)
    //         setSelectedColors(colorsArray)
    //     } if (categoryName[1] === category) {
    //         const sizeArray = [...selectedSizes]
    //         sizeArray.push(id)
    //         setSelectedSizes(sizeArray)
    //     } if (categoryName[2] === category) {
    //         const categoryArray = [...selectedCategories]
    //         categoryArray.push(id)
    //         setSelectedCategories(categoryArray)
    //     } if (categoryName[3] === category) {
    //         const collectionArray = [...selectedCollections]
    //         collectionArray.push(id)
    //         setSelectedCollection(collectionArray)
    //     }
    // }

    const [selected, setSelected] = useState({
        selectedColors: [],
        selectedCollections: [],
        selectedSizes: [],
        selectedCategories: []
    })


    const handleFilterChange = (property, chk, id) => {
        let prop = 'selected' + property[0].toUpperCase() + property.slice(1, property.length - 1) + 's'
        let updated = selected
        if (chk) {
            updated[prop].push(id)
        }
        else {
            updated[prop].splice(updated[prop].indexOf(id), 1);
        }
    }
    return (
        <div className={style.FilterContent}>
            {categoryName.map((name) => (
                <div>
                    <button onClick={() => { handleFilterClick(name) }}>
                        {name} <IoIosArrowDown />
                    </button>

                    {filterName == name && showFilter && filterData[name] && filterData[name].length && filterData[name].map((value) => (
                        <div className={style.FilterCheckboxContent}>
                            <input type="checkbox"  onChange={(e) => handleFilterChange(name, e.target.checked, value.id)} /> {value.name}                           
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Filters;
