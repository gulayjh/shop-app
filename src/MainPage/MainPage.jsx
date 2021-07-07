import React, { useState } from "react";
import style from "./mainPage.module.css";
import MainSlider from "./Slider/Slider";
import Sale from "./Sales/Sale/Sale";

const MainPage = () => {
    const [productNumber, setProductNumber] = useState(4);
 
    return (
        <div className={style.mainContainer}>
            <MainSlider />
            <div className={style.mainDescription}>
                <h3>Our philosophy</h3>
                <h5>
                    We're driven by community and often team up with brands we
                    love and other like-minded individuals. It is our goal to
                    invest back into the community that has given us so much
                    support.
                </h5>
            </div>
            <Sale />
        </div>
    );
};

export default MainPage;
