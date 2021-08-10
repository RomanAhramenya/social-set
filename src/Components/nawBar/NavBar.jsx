import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavBar.module.css';
import p from './person.png';
import d from './dialog.png';
import m from './musik.png';
import n from './news.png';
import set from './setting.png';
function NavBar() {
    let navData = [
        {to:'/profile', text: 'Profile', img:p},
        {to:'/dialogs', text: 'Dialogs', img:d},
        {to:'/musik', text: 'Musik', img:m},
        {to:'/news', text: 'News', img:n},
        {to:'/settings', text: 'Settings', img:set},
    ];
    let navMap = navData.map(function(data){
        return <NavLink className={s.nav} activeClassName={s.active} to={data.to}>
                    <div className={s.navContainer}>
                        <img src={data.img}/>
                        {data.text}
                    </div>
                </NavLink>
    })
    return (
        <div className={s.NavBar}>
           {navMap}
        </div>
    )
}

export default NavBar
