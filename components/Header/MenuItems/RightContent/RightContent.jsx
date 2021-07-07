import React from 'react'
import style from './rightContent.module.css'
import Link from 'next/link'
import { RiShoppingCart2Fill, RiUser3Fill, RiHeart3Fill } from 'react-icons/ri';


const RightContent = () => {
    return (
        <div className={style.RightContent}>
            <Link href='/'>
                <a>
                    <RiShoppingCart2Fill />
                </a>
            </Link>
            <Link href='/'>
                <a>
                    <RiHeart3Fill />
                </a>
            </Link>
            <Link href='/login'>
                <a>
                    <RiUser3Fill />
                </a>
            </Link>

        </div>
    );
}

export default RightContent;