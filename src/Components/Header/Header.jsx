import React from 'react'
import s from './Header.module.css'
import HeaderIn from './HeaderIN/HeaderIn'

function Header() {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                Roman
                <div className={s.logoDown}>Social seti</div>
            </div>
            <HeaderIn/>
        </div>
    )
}

export default Header
