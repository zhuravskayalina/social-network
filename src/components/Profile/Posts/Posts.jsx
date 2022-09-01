import classes from './Posts.module.css';
import Post from './Post/Post';
import NewPost from "./NewPost/NewPost";

const Posts = (props) => {

     const postElements = props.postsData.map(post => {
        return (
            <Post message={post.text} likesCount={post.likesCount}/>
        )
    });

    return (
        <div className={classes.postsWrapper}>
            <NewPost addPost={props.addPost}/>
            <h2 className={classes.header}>My posts</h2>
            {
                postElements
            }

        </div>
        
    )
}

export default Posts;