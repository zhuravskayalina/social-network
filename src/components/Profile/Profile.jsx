import classes from './Profile.module.css';

const Profile = () => {
  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <div className={classes.cover}>
          <div className={classes.profilePhoto}></div>
          <div className={classes.coverInfo}>
            <p className={classes.profileName}>Kat Kat</p>
            <p className={classes.profileStatus}>hi everyone</p>
          </div>
        </div>
      </div>
    </main>
  )
};

export default Profile;