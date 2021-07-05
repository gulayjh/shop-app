import React from 'react'
import style from "./saleTag.module.css"

const SaleTag = (props) => {
    return (
        <div className={style.SaleTag}>
            <span>
               {props.type}
            </span>

        </div>
    );
}

export default SaleTag;