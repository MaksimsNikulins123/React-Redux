import classes from './NewPost.module.css';


const NewPost = (props) => {

    let newPostElement = props.text ;
    
    let addPost = () => {
        props.addNewPost();
    }

    let onChangePostValue = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);  
    }
    
    return(
    <div className={classes.item}>
        <textarea 
            value={newPostElement}
            onChange={onChangePostValue}>
        </textarea>
        <button onClick={ addPost }>Add Post</button>
    </div>         
    )
}
export default NewPost;
        