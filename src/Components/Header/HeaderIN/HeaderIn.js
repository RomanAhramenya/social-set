import React from 'react'
import s from './headerIn.module.css';
import downImg from './down.ico';
import EngImg from './en.png';
function HeaderIn() {
    return (
        <div className={s.headerIn}>
            <button className={s.btn}>Back to home</button>
            <div className={s.choiceLang}>
                <img src={EngImg} className={s.engImg}/>
                <img src={downImg} className={s.downImg}/>
            </div>
        </div>
    )
}

export default HeaderIn
