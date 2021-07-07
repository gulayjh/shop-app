import axios from "axios";
import { useEffect, useState } from "react";
import style from "./similarProductsCard.module.css";

const SimilarProductsCard = (props) => {

    return (
        <div className={style.saleCard}>
            <img src={props.image} alt="" />
            <div className={style.cardDetail}>
                <h4>{props.name}</h4>
                <h5>{props.price}</h5>
            </div>
        </div>
    );
};

export default SimilarProductsCard;
