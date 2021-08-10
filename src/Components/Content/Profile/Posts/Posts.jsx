import React from 'react'
import AddPost from './AddPost'
import Post from './Post'
import s from './Posts.module.css'

function Posts(props) {
  
    let PostMap = props.PostData.map(function(post){
        return <Post massege={post.text} like={post.like} />
    })
    return (
        <div className={s.Posts}>
            <AddPost 
            startValueTextarea={props.startValueTextarea}
            dispatch={props.dispatch}
           />
            { PostMap }
        </div>
    )
}

export default Posts
