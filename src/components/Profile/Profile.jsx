import Cover from './Cover/Cover';
import Posts from './Posts/Posts'
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <Cover name="Britney"/>
        <Posts />
      </div>
    </main>
  )
};

export default Profile;