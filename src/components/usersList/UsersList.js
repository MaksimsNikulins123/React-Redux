// import React from 'react';
import UsersContainer from "./users/UsersContainer"
import classes from './UsersList.module.css';

const UsersList = () => {

    return (
        <div className={classes.userList}>
            <UsersContainer />
        </div>
    )
}

export default UsersList;