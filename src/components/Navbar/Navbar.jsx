import classes from './Navbar.module.css';
import {NavLink, Link} from "react-router-dom";

const Navigation = () => {
    return (

        <ul className={classes.nav}>
            <li className={classes.item}>
                <NavLink to="/profile"
                         className={({isActive}) => isActive ? classes.active : classes['item a']}>
                    Profile
                </NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to="/friends"
                         className={({isActive}) => isActive ? classes.active : classes['item a']}>
                    Friends
                </NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to="/messages"
                         className={({isActive}) => isActive ? classes.active : classes['item a']}>
                    Messages
                </NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to="/photos" className={({isActive}) => isActive ? classes.active : classes['item a']}>
                    Photos
                </NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to="/news" className={({isActive}) => isActive ? classes.active : classes['item a']}>
                    News
                </NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to="/music" className={({isActive}) => isActive ? classes.active : classes['item a']}>
                    Music
                </NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to="/settings" className={({isActive}) => isActive ? classes.active : classes['item a']}>
                    Settings
                </NavLink>
            </li>
        </ul>

    )
};

export default Navigation;