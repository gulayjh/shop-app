import React, { useState } from "react"
import style from "./button.module.css"

const ShowMore = (props) => {
    const handleNumber = (number,setProductNumber) =>{
        let newNumber= number + 4
        setProductNumber(newNumber)
    }
    return (
        <div className={style.Button}>
                <a onClick={(e)=>handleNumber(props.productNumber,props.setProductNumber)}>
                    {props.buttonText}
                </a>

        </div>
    );
}

export default ShowMore;