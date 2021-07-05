import React, { useState } from "react"
import Button from "../../components/Button/Button";
import Title from '../../components/Title/Title'
import style from './mainPage.module.css'
import SaleTag from "../../components/SaleTag/SaleTag";
import ShowMore from "../../components/ShowMore/ShowMore";
import PaginationRounded from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import SizeChart from "../../components/SizeChart/SizeChart";
import PriceSlider from "../../components/PriceSlider/PriceSlider";

const MainPage = () => {
    const [productNumber, setProductNumber] = useState(4)
    return (
        <div>
            mainpage
        </div>
    );
}

export default MainPage;