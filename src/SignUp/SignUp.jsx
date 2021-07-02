import React from 'react'
import { useState } from 'react';
import style from './signup.module.css'
import Link from 'next/link'
import { HiUser, HiMail } from 'react-icons/hi';
import { AiFillEye, AiFillEyeInvisible, AiOutlineArrowLeft } from 'react-icons/ai';

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [mail, setMail] = useState('')
    const [usernameCheck, setUsernameCheck] = useState(true)
    const [passwordCheck, setPasswordCheck] = useState(true)
    const [mailCheck, setMailCheck] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    const handleUserName = (value) => {
        if (value.length >= 4) {
            setUsername(value)
            setUsernameCheck(true)

        } else {
            setUsernameCheck(false)
        }
    }
    const handleMail = (value) => {
        if (value.length >= 4) {
            setMail(value)
            setMailCheck(true)

        } else {
            setMailCheck(false)
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
        if (usernameCheck && passwordCheck && mailCheck) {
            console.log(username, password, mail);
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
                <div className={usernameCheck ? null : style.errorText}>
                    <input onChange={(e) => handleUserName(event.target.value)} placeholder="Username" />
                    <span> <HiUser /> </span>
                </div>
                <div className={mailCheck ? null : style.errorText}>
                    <input onChange={(e) => handleMail(event.target.value)} placeholder="E-Mail" />
                    <span> <HiMail /> </span>
                </div>
                <div className={passwordCheck ? null : style.errorText}>
                    <input type={showPassword ? "text" : "password"} onChange={(e) => handlePassword(event.target.value)} placeholder="Password" />
                    <a onClick={handleClickPassword}> {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />} </a>
                </div>

                <button className={style.SubmitButton} onClick={() => handleSubmit()}>Submit</button>
                <Link href='/login'>
                    <a className={style.loginLink}>Already has an account?</a>
                </Link>

            </div>

            <div className={style.LoginContent}>
                <img className={style.logImage} src="\loginImages\signup.png" alt="loginImage" />
            </div>
        </div>
    );
}

export default SignUp;