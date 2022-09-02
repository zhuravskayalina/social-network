import c from './NewPost.module.css';
import React from "react";
import newPost from "./NewPost";

const NewPost = (props) => { //props.newPostText
    const newPostElement = React.createRef();
    function addNewPost() {
        props.addPost();
    };

    function sendData() {
        props.updateNewPostText(newPostElement.current.value);
    };

    return (
        <div className={c.newPost}>
            <h2>New post</h2>
            <textarea onChange={sendData} value={props.newPostText} ref={newPostElement} name="newPost" id="newPost" cols="30" rows="10"/>
            <button onClick={ addNewPost }>Publish</button>
        </div>
    )
}

export default NewPost;