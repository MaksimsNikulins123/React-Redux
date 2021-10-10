import NewPost from "./NewPost";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from "../../../../StoreContext";

const NewPostContainer = () => {

    return(
        <StoreContext.Consumer>
            {
                (store) => 
                {
                    let state = store.getState();

                    let addNewPost = () => {
                        let action = addPostActionCreator();
                        store.dispatch(action);
                    }
                
                    let updateNewPostText = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }
                    
                    return (
                            <NewPost addNewPost={addNewPost} updateNewPostText={updateNewPostText} text={state.profilePage.textareaText}/>
                        )
                }
            }
        </StoreContext.Consumer>
    )

}

export default NewPostContainer;