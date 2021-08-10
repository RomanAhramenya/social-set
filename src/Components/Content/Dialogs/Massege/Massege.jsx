import React from 'react'
import s from './Massege.module.css'
function Massege(props) {
    return (
        <div className={s.massege}>
            <div className={s.avatar}></div>
            <span>{props.massege}</span>
        </div>
    )
}

export default Massege
