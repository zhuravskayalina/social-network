import classes from './Header.module.css';

const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img className={classes.logoImg} src="https://cdn-icons-png.flaticon.com/512/1083/1083598.png" alt="logo - alien" ></img>
            </div>
            <div className={classes.headerMenu}>
                <div className={classes.search}>search bar</div>
                <div className={classes.notifications}>notifications</div>
                <div className={classes.profilePic}></div>
            </div>
        </header>
    )
};

export default Header;