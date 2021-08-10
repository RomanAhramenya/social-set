import React from 'react'
import { addPostActionCreater, resetInputActionCreater } from '../../../redux/state';
import s from './Posts.module.css'
function AddPost(props) {
    let textareaValue = React.createRef();
  
    let addPost = () =>{
        props.dispatch(addPostActionCreater(textareaValue.current.value));
    }
    let resetInput = (e) => {
        e.preventDefault()
        props.dispatch(resetInputActionCreater(textareaValue.current.value));
    }
    return (
        <div className={s.AddPost}>
            <textarea ref={textareaValue} value={props.startValueTextarea}
            onInput={resetInput}
            ></textarea>
            <button onClick={addPost}>Add</button>
        </div>
    )
}

export default AddPost
