import React, { useState } from "react";
import style from "./button.module.css";

const ShowMore = (props) => {
    // const [productNumber, setProductNumber] = useState(4);
    // const handleNumber = () => {
    //     let newNumber = productNumber + 4;
    //     setProductNumber(newNumber);

    //     let newArr = [...props.newSale];    
    //     newArr[props.index].goods = props.sale[props.index].goods.slice(
    //         0,
    //         props.productNumber
    //     );
    //     props.setNewSale(newArr);
    // };

    return (
        <div className={style.Button}>
            <a
                onClick={(e) =>
                    props.onclickHandler()
                }
            >
                {props.buttonText}
            </a>
        </div>
    );
};

export default ShowMore;
