import classes from './Cover.module.css';

const Cover = (props) => {
  return (

        <div className={classes.cover}>
          <div className={classes.profilePhoto}></div>
          <div className={classes.coverInfo}>
            <p className={classes.profileName}>{props.name} Spears</p>
            <p className={classes.profileStatus}>hi everyone</p>
          </div>
        </div>

  )
};

export default Cover;