import React from 'react'
import s from './dialogs.module.css'
import AllFriend from './Friend/AllFriend'
import AllMassege from './Massege/AllMassege'

function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <AllFriend frend={props.DialogsFrend.DialogsPage.frend}/>
            <AllMassege/>
            
        </div>
    )
}

export default Dialogs
