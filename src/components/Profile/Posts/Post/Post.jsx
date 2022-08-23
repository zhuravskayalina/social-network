import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.postInfo}>
                <img className={classes.avatar} src="https://i.pinimg.com/280x280_RS/4c/46/b2/4c46b220fdd0495e07c20338c71dbd13.jpg" alt="Profile avatar" />
                <div className={classes.postHeader}>
                    <h2>Britney Spears</h2>
                    <p>Posted today</p>
                </div>
            </div>
            <div className={classes.postContent}>
                <p>{props.message}
                </p>
                <div className={classes.underPostInfo}>
                    <div className={classes.like}>
                        <p className={classes.heart}>like!</p>
                        <p>{props.likesCount} people likes this</p>
                    </div>
                    <div className={classes.comments}>
                        0 comments
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post;