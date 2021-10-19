import classes from './MyPosts.module.css';
import NewPostContainer from './newPost/NewPostContainer';
import Post from './post/Post';

const MyPosts = (props) => {

                let postElements = props.postData.map( (post) => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>)

                return(
                        <div className={classes.item}>
                            <p>My posts</p>
                            <NewPostContainer />
                            {postElements}
                        </div>
                        )

}

export default MyPosts;

