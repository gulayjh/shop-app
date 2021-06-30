import React from "react"
import Link from 'next/link'
import style from "./button.module.css"

const Button = (props) => {
    return (
        <div className={style.Button}>
            <Link href={props.link}>
                <a>
                    {props.buttonText}
                </a>
            </Link>

        </div>
    );
}

export default Button;