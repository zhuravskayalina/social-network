import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
     const postElements = props.postsData.map(post => {
        return (
            <Post message={post.text} likesCount={post.likesCount}/>
        )
    });

    return (
        <div className={classes.postsWrapper}>
            <h2 className={classes.header}>My posts</h2>  
            <div className={classes.newPost}></div>

            {
                postElements
            }

        </div>
        
    )
}

export default Posts;