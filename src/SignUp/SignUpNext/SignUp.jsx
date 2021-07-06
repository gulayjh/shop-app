import React, { useEffect } from 'react'
import axios from 'axios';
import { baseURL } from '../../../utils';
import { getUserToken } from '../../../utils';
import { useState } from 'react';
import style from './signup.module.css'
import Link from 'next/link'
import { HiUser, HiMail } from 'react-icons/hi';
import { AiFillEye, AiFillEyeInvisible, AiOutlineArrowLeft } from 'react-icons/ai';

const SignUp = (props) => {
    const [data, setData] = useState('')
    const [genderData, setGenderData] = useState('')
    const token = getUserToken()

    useEffect(() => {
        axios.get(baseURL + `Account/getgenders?lng=en`)
            .then(response => setGenderData(response.data.obj));
    }, [])
    useEffect(() => {
        handleSignUp()
    }, [data])

    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [gender, setGender] = useState('')
    const [birthdayDate, setBirthdayDate] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const [firstNameCheck, setFirstNameCheck] = useState(true)
    const [lastNameCheck, setLastNameCheck] = useState(true)
    const [genderCheck, setGenderCheck] = useState(true)
    const [birthdayCheck, setBirthdayCheck] = useState(true)
    const [mailCheck, setMailCheck] = useState(true)
    const [passwordCheck, setPasswordCheck] = useState(true)

    const [showPassword, setShowPassword] = useState(false)

    const handleFirstName = (value) => {
        if (value.length >= 4) {
            setFirstname(value)
            setFirstNameCheck(true)
        } else {
            setFirstNameCheck(false)
        }
    }
    const handleLastName = (value) => {
        if (value.length >= 4) {
            setLastname(value)
            setLastNameCheck(true)
        } else {
            setLastNameCheck(false)
        }
    }
    const handleGender = (value) => {
        if (value) {
            setGender(value)
            setGenderCheck(true)
        } else {
            setGenderCheck(false)
        }
    }
    const handleBirthday = (value) => {
        if (value) {
            console.log(value);
            setBirthdayDate(value)
            setBirthdayCheck(true)
        } else {
            setBirthdayCheck(false)
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
        if (firstNameCheck && lastNameCheck && genderCheck && birthdayCheck && mailCheck && passwordCheck) {
            const RegisterData = {
                "name": firstName,
                "surname": lastName,
                "genderId": gender,
                "birthday": birthdayDate,
                "phonenumber": props.checkedPhone,
                "email": mail,
                "smsCode": props.smsCode,
                "password": password,
                "token": token
            }
            axios.post(baseURL + `Account/register`, RegisterData)
                .then(response => setData(response));
        }
    }
    const handleSignUp = () => {
        if (data.status === 200) {
            props.setSignedIn(true)
        }
    }
    console.log(genderData);

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
                <div className={style.SignUpRow}>
                    <div className={firstNameCheck ? null : style.errorText}>
                        <input onChange={(e) => handleFirstName(event.target.value)} placeholder="First name" />
                    </div>
                    <div className={lastNameCheck ? null : style.errorText}>
                        <input onChange={(e) => handleLastName(event.target.value)} placeholder="Username" />
                    </div>
                </div>
                <div className={style.SignUpRow}>
                    <div className={style.GenderContent}>
                        {genderData && genderData.length && genderData.map((item) => (
                            <div className={genderCheck ? null : style.errorText}>
                                <span>{item.name}</span>
                                <input name="gender" type="radio" onChange={(e) => handleGender(event.target.value)} value={item.id} />
                            </div>
                        ))}
                    </div>

                    <div className={birthdayCheck ? null : style.errorText}>
                        <input type="date" onChange={(e) => handleBirthday(event.target.value)} placeholder="Username" />
                    </div>
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
        </div >
    );
}
export default SignUp;