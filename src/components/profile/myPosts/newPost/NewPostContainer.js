import NewPost from "./NewPost";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
 
    return {
        text: state.profilePage.textareaText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addNewPost: () => { dispatch(addPostActionCreator()) },
        updateNewPostText: (text) => { dispatch(updateNewPostTextActionCreator(text)) }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost); 

export default NewPostContainer;