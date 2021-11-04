import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => {
    
    return (    
        <div className={classes.friendInfo}>
            <div className={classes.friendAvatar}>
                <img src={props.avatar}/>
            </div>
            <div className={classes.friendName}>
                <span>{props.name}</span>
            </div>   
        </div>
        )
}
export default Friend;