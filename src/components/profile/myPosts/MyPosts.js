import React from 'react';
import StoreContext from '../../../StoreContext';
import classes from './MyPosts.module.css';
import NewPostContainer from './newPost/NewPostContainer';
import Post from './post/Post';

const MyPosts = () => {

return(
    <StoreContext.Consumer>
        {
            (store) => 
            {
                let state = store.getState();
                let postElements = state.profilePage.postData.map( (post) => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>)

                return(
                        <div className={classes.item}>
                            <p>My posts</p>
                            <NewPostContainer />
                            {postElements}
                        </div>
                        )
            }
        }
    </StoreContext.Consumer> 
)
}
export default MyPosts;

