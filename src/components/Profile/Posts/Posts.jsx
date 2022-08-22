import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div className={classes.postsWrapper}>
            <h2 className={classes.header}>My posts</h2>  
            <div className={classes.newPost}></div>
            <Post/>
            <Post/>        
        </div>
        
    )
}

export default Posts;