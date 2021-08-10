import React from 'react'
import Massege from './Massege'
import s from './Massege.module.css'
function AllMassege() {
    return (
        <div className={s.allMassege}>
            <Massege massege="hello"/>
            <Massege massege="hello sdfsdfdsf"/>
            <Massege massege="hello"/>
            <Massege massege="hello sdsfs"/>
        </div>
    )
}

export default AllMassege
