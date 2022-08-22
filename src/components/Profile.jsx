import classes from './Profile.module.css';

const Profile = () => {
  return (
    <main className={classes.main}>
      <img className={classes['main-img']} src="https://assets.vogue.ru/photos/5f3e2706a58151d7dfc76773/16:9/w_2580%2Cc_limit/Britney01.jpg" alt="britney image"></img>
      <img className={classes.avatar} src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg' alt='avatar'></img>
      <div className={classes['main-content']}>
        <div className={classes.posts}>
          <div className={classes.item}>Post 1</div>
          <div className={classes.item}>Post 2</div> 
        </div>

      </div>
    </main>
  )
};

export default Profile;