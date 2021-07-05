import React from "react";
import style from "./mainButton.module.css";
import Link from "next/link";

const MainButton = (props) => {
    return (
        <div className={style.Button}>
            <Link href={props.link}>
                <a>{props.buttonText}</a>
            </Link>
        </div>
    );
};

export default MainButton;
