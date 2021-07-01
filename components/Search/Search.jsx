import React, { useState } from 'react'
import style from './search.module.css'


const Search = (props) => {
    const [searchText, setSearchText] = useState('')

    const handleSearch = (value) => {
        setSearchText(value)
    }
    console.log(searchText);
    
    return (
        <div className={style.Search}>
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0163 12.6602L18.7592 18.4032C18.9128 18.5567 18.9128 18.8056 18.7592 18.9592C18.6824 19.036 18.5818 19.0744 18.4812 19.0744C18.3806 19.0744 18.2799 19.036 18.2031 18.9592L12.4603 13.2163C11.1358 14.4091 9.38963 15.1422 7.47112 15.1422C3.35156 15.1422 0 11.7907 0 7.67113C0 3.55158 3.35156 0.200012 7.47112 0.200012C11.5907 0.200012 14.9422 3.55158 14.9422 7.67109C14.9422 9.5896 14.2091 11.3358 13.0163 12.6602ZM0.786457 7.67113C0.786457 11.3571 3.78549 14.3558 7.47112 14.3558C11.1567 14.3558 14.1558 11.3572 14.1558 7.67113C14.1558 3.9851 11.1567 0.986432 7.47112 0.986432C3.78549 0.986432 0.786457 3.98513 0.786457 7.67113Z" fill="#282726" />
            </svg>

            <input type="text" id="search" placeholder="Search" onChange={(e) => handleSearch(event.target.value)} />
        </div>
    );
}

export default Search;