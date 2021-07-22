import axios from 'axios';
import { baseURL, getUserToken } from '../../utils';
import React, { useState } from 'react'
import style from './login.module.css'
import Link from 'next/link'
import { HiUser, HiMail } from 'react-icons/hi';
import { AiFillEye, AiFillEyeInvisible, AiOutlineArrowLeft } from 'react-icons/ai';

const Login = (props) => {
    const [phonenumber, setPhonenumber] = useState('')
    const [password, setPassword] = useState('')
    const [phonenumberCheck, setPhonenumberCheck] = useState(true)
    const [passwordCheck, setPasswordCheck] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const token = getUserToken()
    const handleUserName = (value) => {
        if (value.length >= 4) {
            setPhonenumber(value)
            setPhonenumberCheck(true)
        } else {
            setPhonenumberCheck(false)
        }
    }
    const handlePassword = (value) => {
        if (value.length >= 4) {
            setPassword(value)
            setPasswordCheck(true)
        } else {
            setPasswordCheck(false)
        }
    }
    const handleSubmit = () => {
        if (phonenumberCheck && passwordCheck) {
            const LoginData = {
                "phonenumber": phonenumber,
                "password": password,
                "oldToken": token
            }

            axios.post(baseURL + `Account/login`, LoginData)
            .then((response) => {
                if ((response.data.statusCode === 200)) {
                    props.setLoggedIn(true)
                }
            })
        }
    }

    const handleClickPassword = () => {
        setShowPassword(!showPassword)
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
                    <input onChange={(e) => handleUserName(event.target.value)} placeholder="Phone" />
                    <span> <HiUser /> </span>
                </div>
                <div className={passwordCheck ? null : style.errorText}>
                    <input type={showPassword ? "text" : "password"} onChange={(e) => handlePassword(event.target.value)} placeholder="Password" />
                    <a onClick={handleClickPassword}> {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />} </a>
                </div>

                <button className={style.SubmitButton} onClick={() => handleSubmit()}>Login</button>
                <Link href='/signup'>
                    <button className={style.SignUpButton}>Sign Up</button>
                </Link>

            </div>

            <div className={style.LoginContent}>
                <img className={style.logImage} src="\loginImages\login.png" alt="loginImage" />
            </div>
        </div>
    );
}

export default Login;