import classes from './Posts.module.css';
import Post from './Post/Post';

const postsData = [
    {id: 1, text: 'My first post!', likesCount: '7b'},
    {id: 2, text: 'Oops i did it again!', likesCount: '8b'},
];

const Posts = () => {
    return (
        <div className={classes.postsWrapper}>
            <h2 className={classes.header}>My posts</h2>  
            <div className={classes.newPost}></div>
            <Post message={postsData[0].text} likesCount={postsData[0].likesCount}/>
            <Post message={postsData[1].text} likesCount={postsData[1].likesCount}/>
        </div>
        
    )
}

export default Posts;