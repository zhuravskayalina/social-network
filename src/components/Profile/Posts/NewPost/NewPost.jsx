import c from './NewPost.module.css';
import React from "react";

const NewPost = (props) => {
    const newPostElement = React.createRef();
    function addNewPost() {
        const text = newPostElement.current.value; // current ссылается на нативный html -елемент
        props.addPost(text);
        newPostElement.current.value = '';
    };

    function sendData() {

    };

    return (
        <div className={c.newPost}>
            <h2>New post</h2>
            <textarea onChange={sendData} ref={newPostElement} name="newPost" id="newPost" cols="30" rows="10"></textarea>
            <button onClick={ addNewPost }>Publish</button>
        </div>
    )
}

export default NewPost;