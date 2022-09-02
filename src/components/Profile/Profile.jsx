import Cover from './Cover/Cover';
import Posts from './Posts/Posts'
import classes from './Profile.module.css';

const Profile = (props) => {

    return (
        <div>
            <Cover name="Britney"/>
            <Posts postsData={props.state.postsData}
                   addPost={props.addPost}
                   newPostText={props.state.newPostText}
                   updateNewPostText={props.updateNewPostText}/>
        </div>
    )
};

export default Profile;