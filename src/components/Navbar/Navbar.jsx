import classes from './Navbar.module.css';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (

        <ul className={classes.nav}>
            <li className={`${classes.item} ${classes.active}`}>
                <Link to="/profile">Profile</Link>
            </li>
            <li className={classes.item}>
                <Link to="/friends">Friends</Link>
            </li>
            <li className={classes.item}>
                <Link to="/messages">Messages</Link>
            </li>
            <li className={classes.item}>
                <Link to="/photos">Photos</Link>
            </li>
            <li className={classes.item}>
                <Link to="/news">News</Link>
            </li>
            <li className={classes.item}>
                <Link to="/music">Music</Link>
            </li>
            <li className={classes.item}>
                <Link to="/settings">Settings</Link>
            </li>
        </ul>

    )
};

export default Navigation;