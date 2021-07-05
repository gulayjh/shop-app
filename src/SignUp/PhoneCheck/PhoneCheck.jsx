import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import style from './signup.module.css'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { baseURL } from '../../../utils'

const SignUp = (props) => {
    const [phonenumber, setPhonenumber] = useState('')
    const [phonenumberCheck, setPhonenumberCheck] = useState(true)
    const [data, setData] = useState('')
    useEffect(() => {
        handleData()
    }, [data])

    const handlePhoneNumber = (value) => {
        if (value.length == 9) {
            setPhonenumber('994' + value)
            setPhonenumberCheck(true)

        } else {
            setPhonenumberCheck(false)
        }
    }

    const handleSubmit = () => {
        if (phonenumberCheck && phonenumber.length > 0) {
            axios.get(baseURL + `Account/SendSmsCode?phonenumber=${phonenumber}`)
                .then(response => setData(response.data));
        }
    }
    const handleData = () => {
        if (data.statusCode === 200 && data.message === "ok") {
            console.log("data");
            props.setSmsCode(data.obj.sms_code)
            props.setShowModal(true)
            props.setCheckedPhone(data.obj.phonenumber)
        }
    }
    return (
        <div className={style.LoginContainer}>
            <div className={style.FirstLoginContent}>
                <div className={style.LogoContainer}>
                </div>
                <div>
                    <h1>Welcome</h1>
                    <h1>Content</h1>
                </div>
                <div>
                    <Link href='/'>
                        <a>
                            <span className={style.arrowHome}>
                                <AiOutlineArrowLeft />
                                Home
                            </span>
                        </a>
                    </Link>
                </div>

            </div>
            <div className={style.LoginContent}>
                <div className={phonenumberCheck ? null : style.errorText}>
                    <span>+994</span>
                    <input onChange={(e) => handlePhoneNumber(event.target.value)} type="number" placeholder="Phone" pattern="[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}" required />
                </div>

                <button className={style.SubmitButton} onClick={() => handleSubmit()}>Submit</button>
            </div>

            <div className={style.LoginContent}>
                <img className={style.logImage} src="\loginImages\signup.png" alt="loginImage" />
            </div>

        </div>
    );
}

export default SignUp;