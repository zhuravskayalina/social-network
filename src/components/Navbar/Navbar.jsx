import classes from './Navbar.module.css';

const Navigation = () => {
    return (
    
        <ul className={classes.nav}>
          <li className={`${classes.item} ${classes.active}`}><a href="/profile" title="Profile">Profile</a></li>
          <li className={classes.item}><a href="/dialogs" title="Friends">Friends</a></li>
          <li className={classes.item}><a title="Photos">Photos</a></li>
          <li className={classes.item}><a title="Messages">Messages</a></li>
          <li className={classes.item}><a title="News">News</a></li>
          <li className={classes.item}><a title="Music">Music</a></li>
          <li className={classes.item}><a title="Profile">Settings</a></li>
        </ul>
 
    )
};

export default Navigation;