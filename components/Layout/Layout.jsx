import React, { useEffect, useState } from 'react'
import style from './layout.module.css'
import { useRouter } from 'next/router'
import Title from '../Title/Title'

const Layout = ({ children, page }) => {
    const router = useRouter()
    const [width, setWindowWidth] = useState(0)

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
        <div className={style.Layout}>
            <div className={style.mainContainer}>
                {React.cloneElement(children, null)}

            </div>
        </div>
    )
}

export default Layout;