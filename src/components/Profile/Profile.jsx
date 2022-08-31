import Cover from './Cover/Cover';
import Posts from './Posts/Posts'
import classes from './Profile.module.css';

const Profile = (props) => {

    return (
        <div className={classes.wrapper}>
            <Cover name="Britney"/>
            <Posts postsData={props.postsData}/>
        </div>
    )
};

export default Profile;