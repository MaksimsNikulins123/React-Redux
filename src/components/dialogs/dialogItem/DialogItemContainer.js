import DialogItem from "./DialogItem";
import { getUserTopicActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from "../../../StoreContext";

const DialogItemContainer = () => {

    return(
        <StoreContext.Consumer>
            {
                (store) => 
                {
                    let state = store.getState();

                    let getUserTopic = (messageID) => {
                    let action = getUserTopicActionCreator(messageID)
                    store.dispatch(action)
                    }

                    let users = state.dialogsPage.dialogsData.map( 
                        (dialog) => 
                            <DialogItem 
                                key={dialog.id} 
                                id={dialog.id} 
                                name={dialog.name} 
                                avatar={dialog.avatar}
                                getUserTopic={getUserTopic}
                            />
                    )
                    return (
                        <div>
                            {users}
                        </div>
                    )
                }
            }
        </StoreContext.Consumer>
    )

}

export default DialogItemContainer;