import classes from './Navbar.module.css';

const Navigation = () => {
    return (
      <nav className={classes.nav}>
        <div className={classes.item}><a title="Profile">Profile</a></div>
        <div className={classes.item}><a title="Friends">Friends</a></div>
        <div className={classes.item}><a title="Messages">Messages</a></div>
        <div className={classes.item}><a title="Photos">Photos</a></div>
        <div className={classes.item}><a title="News">News</a></div>
        <div className={classes.item}><a title="Music">Music</a></div>
        <div className={classes.item}><a title="Settings">Settings</a></div>
    </nav>
    )
};

export default Navigation;