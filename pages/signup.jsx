
import SignUp from "../src/SignUp/SignUpNext/SignUp"
import PhoneCheck from "../src/SignUp/PhoneCheck/PhoneCheck"
import MainPage from "../src/MainPage/MainPage"
import SmsCode from "../src/SignUp/SmsCode/SmsCode"
import { useState } from "react"
import Modal from "../components/Modal/Modal"

export default function signup() {
    const [signedIn, setSignedIn] = useState(false)
    const [signup, setSignup] = useState(false)
    const [checkedPhone, setCheckedPhone] = useState('')
    const [smsCode, setSmsCode] = useState()
    const [showModal, setShowModal] = useState(false)
  
    return (
        <div>

            {
                signedIn ? <MainPage />
                    :
                    < div >

                        {
                            showModal ?
                                <Modal>
                                    < SmsCode
                                        checkedPhone={checkedPhone}
                                        smsCode={smsCode}
                                        setShowModal={setShowModal}
                                        setSignup={setSignup}
                                    />
                                </Modal > : null
                        }

                        {
                            signup ?
                                <SignUp
                                    setSignedIn={setSignedIn}
                                    checkedPhone={checkedPhone}
                                    smsCode={smsCode}
                                />
                                : <PhoneCheck
                                    setCheckedPhone={setCheckedPhone}
                                    setSmsCode={setSmsCode}
                                    setShowModal={setShowModal}

                                />

                        }


                    </div >
            }
        </div>
    )
}