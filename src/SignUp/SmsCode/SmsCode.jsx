import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './smsCode.module.css'
import ReactCodeInput from 'react-verification-code-input';
import { baseURL } from '../../../utils';

const SmsCode = (props) => {
    const [data, setData] = useState('')
    useEffect(() => {
        handleSmsCode()
    }, [data])


    const handleInputCode = (value) => {
        axios.get(baseURL + `Account/ValidateSmsCode?phonenumber=${props.checkedPhone}&code=${value}`)
            .then(response => setData(response.data));
    }

    const handleSmsCode = () => {
        if (data.statusCode === 200 && data.message === "ok" && !data.obj) {
            props.setShowModal(false)
            props.setSignup(true)
            console.log("shadgsfdhj");
        }

    }
    return (
        <div className={style.SmsCodeContent}>
            <div className={style.SmsCodeText}>
                <h2>Verification Code</h2>
                <h3>Enter the verification code sent to +{props.checkedPhone}</h3>
            </div>
            <div className={style.SmsCode}>
                <ReactCodeInput
                    onComplete={(event) => handleInputCode(event)}
                    type='number'
                    fields={4}
                    className={style.verificationInput}
                    autoFocus
                />
            </div>
        </div>
    );
}

export default SmsCode;