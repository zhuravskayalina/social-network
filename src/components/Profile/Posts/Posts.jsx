import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div className={classes.postsWrapper}>
            <h2 className={classes.header}>My posts</h2>  
            <div className={classes.newPost}></div>
            <Post message='Oops i did it again' likesCount='8b'/>
            <Post message='New post!!' likesCount='7b'/>        
        </div>
        
    )
}

export default Posts;