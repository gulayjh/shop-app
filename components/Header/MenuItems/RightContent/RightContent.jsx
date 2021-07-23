import React, { useState } from "react";
import style from "./rightContent.module.css";
import Link from "next/link";
import { RiShoppingCart2Fill, RiUser3Fill, RiHeart3Fill } from "react-icons/ri";
import { useRouter } from "next/router";
import { Fragment } from "react";

const RightContent = () => {
    const router = useRouter();

    return (
        <div className={style.RightContent}>
            <div className={style.langDrop}>
                <div className={style.langName}>{router.locale}</div>
                <ul className={style.langList}>
                    {router.locales.map((locale) => {
                        return (
                            <Fragment>
                                {router.locale !== locale && (
                                    <li key={locale}>
                                        <Link
                                            href={router.asPath}
                                            locale={locale}
                                        >
                                            <a>{locale}</a>
                                        </Link>
                                    </li>
                                )}
                            </Fragment>
                        );
                    })}
                </ul>
            </div>

            <Link href="/cart">
                <a>
                    <RiShoppingCart2Fill />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <RiHeart3Fill />
                </a>
            </Link>
            <Link href="/login">
                <a>
                    <RiUser3Fill />
                </a>
            </Link>
        </div>
    );
};

export default RightContent;
