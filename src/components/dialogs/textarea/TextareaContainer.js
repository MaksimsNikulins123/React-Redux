import Textarea from "./Textarea";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  
    let newMessageText = state.dialogsPage.dialogsData[state.dialogsPage.userDialogId].textareaText;
    let userId = state.dialogsPage.userDialogId;
    return {
        newMessageText: newMessageText,
        userId: userId
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageText: (text, userId) => { dispatch(updateNewMessageTextActionCreator(text, userId))},
        addMessage: (userId) => { dispatch(addMessageActionCreator(userId))}  
    }
}

const TextareaContainer = connect(mapStateToProps, mapDispatchToProps)(Textarea);

export default TextareaContainer;