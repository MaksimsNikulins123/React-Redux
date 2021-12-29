import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return(
    <div className={classes.item}>
        
        <div className={classes.post}>
        <img src='https://cdn.w600.comps.canstockphoto.com/like-on-mobile-feedback-smartphone-eps-vectors_csp79925530.jpg' alt="img"/>
            <span>{props.message}</span>
        </div>
        <div className={classes.like}>
            <span>Like </span> <span>{props.likesCount}</span>
        </div>
    </div>         
    )
}
export default Post;
        