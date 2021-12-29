import React from 'react';

import MyPostsContainer from './myPosts/MyPostsContainer';
import classes from './Profile.module.css';
import UserInfo from './userInfo/UserInfo';

const Profile = (props) => {

    return(
        <div className={classes.profile}>
            <UserInfo  profile={props.profile}/>
            <MyPostsContainer />
      </div>
    )
}
export default Profile;

