import Textarea from "./Textarea";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from "../../../StoreContext";

const TextareaContainer = () => {

    return(
        <StoreContext.Consumer>
            {
                (store) => 
                {
                    let state = store.getState();
                    let newMessageText = state.dialogsPage.dialogsData[state.dialogsPage.userDialogId].textareaText;
                    
                    
                    let addMessage = (userId) => {
                        let action = addMessageActionCreator(userId);
                        store.dispatch(action);
                    }
                    
                    let updateNewMessageText = (text, userId) => {
                        let action = updateNewMessageTextActionCreator(text, userId);
                        store.dispatch(action);
                    }

                  
                    
                        return(
                           
                            <Textarea
                                
                                newMessageText={newMessageText} 
                                userId={state.dialogsPage.userDialogId} 
                                updateNewMessageText={updateNewMessageText} 
                                addMessage={addMessage}
                            />
                        ) 
                }
            }
        </StoreContext.Consumer>
    )
}

export default TextareaContainer;