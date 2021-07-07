import React, { useState, useEffect } from "react"
import style from './header.module.css'
import Link from 'next/link'
import Categories from './MenuItems/Categories/Categories'
import CategoriesResponsive from './MenuItems/CategoriesResponsive/Categories'
import RightContent from "./MenuItems/RightContent/RightContent"
import { TiThMenu } from 'react-icons/ti';

const Header = ({ sidebarWidth }) => {
    const [width, setWindowWidth] = useState(0)
    const [showSideMenu, setShowSideMenu] = useState(false)

    useEffect(() => {
        updateDimensions();

        window.addEventListener('resize', updateDimensions);
        return () =>
            window.removeEventListener('resize', updateDimensions);
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }
    return (
        <div className={style.headerContainer}>
            {1024 < width ?
                <div className={style.LogoItem}>
                    <Link href='/'>
                        <a>
                        </a>
                    </Link>
                </div>
                : <button className={style.menuButton} onClick={() => { setShowSideMenu(prev => !prev) }}>
                    <TiThMenu />
                </button>
            }
            {showSideMenu && 1024 > width ?
                <div className={style.ResponsiveMenu}>
                    <CategoriesResponsive />
                </div>
                : null}
            {1024 < width ?
                <div className={style.CategoriesContent}>
                    <Categories />
                </div>
                : null}
            <div className={style.RightContent}>
                <RightContent />
            </div>

        </div >
    );
}

export default Header;