import React, { useState } from "react"
import Button from "../../components/Button/Button";
import Title from '../../components/Title/Title'
import style from './mainPage.module.css'
import SaleTag from "../../components/SaleTag/SaleTag";
import ShowMore from "../../components/ShowMore/ShowMore";

const MainPage = () => {
    const [productNumber, setProductNumber] = useState(4)
    return (
        <div>
            {productNumber}
            <div className={style.ButtonContainer}>
                <Button
                    link="asd"
                    buttonText="asdasd"
                />

                <ShowMore
                buttonText="Show More"
                    setProductNumber={setProductNumber}
                    productNumber={productNumber}
                />

            </div>
            <Title title="hehhye"></Title>
            <SaleTag type="new"></SaleTag>


        </div>
    );
}

export default MainPage;