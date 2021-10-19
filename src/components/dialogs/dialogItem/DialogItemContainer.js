import DialogItem from "./DialogItem";
import { getUserTopicActionCreator } from '../../redux/dialogs-reducer';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    
    return {
        dialogsData: state.dialogsPage.dialogsData
       
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        getUserTopic: (messageID) => { dispatch(getUserTopicActionCreator(messageID)) }
    }
}

const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem); 


export default DialogItemContainer;