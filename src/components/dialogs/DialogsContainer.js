import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    
    return(
        <StoreContext.Consumer>
            {
                (store) => 
                {
                    let state = store.getState();

                    let route = '/dialogs/' + state.dialogsPage.userDialogId;

                    return(
                            <Dialogs route={route}  userTopic={state.dialogsPage.dialogsData[state.dialogsPage.userDialogId]}/>   
                        )
                }
            }
        </StoreContext.Consumer>
    )

}

export default DialogsContainer;