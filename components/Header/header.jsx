import React from "react"
import style from './header.module.css'

const Header = () => {
    return ( 
        <div className={style.headerContainer}>

            <div>
                Logo
            </div>
    
            <div>
                menu
            </div>
            <div>
                login account 
            </div>

        </div>
     );
}
 
export default Header;