import React from 'react';
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {

    let route = '/dialogs/' + state.dialogsPage.userDialogId;

    return {
        key: state.dialogsPage.userDialogId,
        route: route,
        userTopic: state.dialogsPage.dialogsData[state.dialogsPage.userDialogId]
    }
}

let mapDispatchToProps = () => {
    return{
    
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); 

export default DialogsContainer;