import React from 'react'
import s from './Posts.module.css'
function Post(props) {
    return (
        <div className={s.Posts}>
            <div className={s.avatar}></div>
            <div className={s.textPost}>
                {props.massege}
                <div className={s.like}>{props.like}</div>
            </div>
        </div>
    )
}

export default Post
