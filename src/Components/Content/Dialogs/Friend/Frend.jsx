import React from 'react'
import s from './frend.module.css'
function Frend(props) {
    return (
        <div className={s.frend}>
            <div className={s.avatar}></div>
            <span>{props.name}</span>
        </div>
    )
}

export default Frend
