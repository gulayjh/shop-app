import React, { useState } from "react"
import style from "./button.module.css"

const LoginButton = (props) => {
    return (
        <div className={style.Button}>
                <a>
                    {props.buttonText}
                </a>

        </div>
    );
}

export default LoginButton;