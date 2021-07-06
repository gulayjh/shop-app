import React from 'react'
import style from './myAccount.module.css'

const MyAccount = (props) => {
    
    return (
        <div className={style.MyAccountContent}>
            <div>
                <span>Name:</span>
                <span>{props.data && props.data.client.name}</span>
            </div>

            <div>
                <span>Surname:</span>
                <span>{props.data && props.data.client.surname}</span>
            </div>

            <div>
                <span>Birthday:</span>
                <span>{props.data && props.data.client.birthdayString}</span>
            </div>
            <div>
                <span>Username:</span>
                <span>{props.data && props.data.client.username}</span>
            </div>
            <div>
                <span>Phonenumber:</span>
                <span>{props.data && props.data.client.phonenumber}</span>
            </div>
            <div>
                <span>E-mail:</span>
                <span>{props.data && props.data.client.email}</span>
            </div>
            <div>
                <span>Address:</span>
                <span>{props.data && props.data.client.username}</span>
            </div>
        </div>

    );
}

export default MyAccount;