import React from 'react'
import Posts from './Posts/Posts'
import s from './Profile.module.css'
import img from './chelsea.jpg'
function Profile(props) {
    return (
        <div className={s.profile}>
            <img src={img} alt="" />
            <Posts 
                startValueTextarea={props.startValueTextarea}
                PostData={props.PostData}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile
