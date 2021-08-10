import React from 'react'
import { NavLink } from 'react-router-dom';
import Frend from './Frend';
import s from './frend.module.css';
function AllFriend(props) {
    let frendMap = props.frend.map(function(frend){
        return  <NavLink to={'/dialogs/'+frend.id} className={s.navLink} activeClassName={s.activeLink}><Frend name={frend.name}  /> </NavLink> 
    })
    return (
        <div className={s.allFriend}>
            { frendMap }
        </div>
    )
}

export default AllFriend
