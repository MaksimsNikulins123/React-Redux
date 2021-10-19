import MyPostsContainer from './myPosts/MyPostsContainer';
import classes from './Profile.module.css';
import UserInfo from './userInfo/UserInfo';

const Profile = () => {

    return(
        <div className={classes.profile}>
            <UserInfo />
            <MyPostsContainer />
      </div>
    )
}
export default Profile;

