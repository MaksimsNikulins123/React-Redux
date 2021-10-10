import MyPosts from './myPosts/MyPosts';
import classes from './Profile.module.css';
import UserInfo from './userInfo/UserInfo';

const Profile = () => {

    return(
        <div className={classes.profile}>
            <UserInfo />
            <MyPosts />
        </div>
    )
}
export default Profile;

