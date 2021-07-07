import React from 'react';
import style from './modal.module.css'

const Modal = ({ title, closeModule, children }) => {
    return (
        <div className={style.Popup}>
            <div className={style.ChildContainer}>
                {children}
            </div>
        </div>
    );
};

export default Modal;