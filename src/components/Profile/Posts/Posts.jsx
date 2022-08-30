import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    const postsData = [
        {id: 1, text: 'My first post!', likesCount: '7b'},
        {id: 2, text: 'Oops i did it again!', likesCount: '8b'},
    ];

    const postElements = postsData.map(post => {
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