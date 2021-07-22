import React from "react";
import style from "./dropDown.module.css";
import Link from "next/link";

const DropDown = (props) => {
    return (
        <div className={style.DropDownContent}>
            {props.data &&
                props.data.length > 0 &&
                props.data.map((item) => {
                    if (item.parentId === props.categoryId) {
                        return (
                            <div key={item.name}>
                                <Link href="/">
                                    <a>{item.name}</a>
                                </Link>
                            </div>
                        );
                    }
                })}
        </div>
        // <div>
        //     {props.id}
        // </div>
    );
};

export default DropDown;
