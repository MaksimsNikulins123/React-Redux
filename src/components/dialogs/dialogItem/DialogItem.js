import React from 'react';
import DialogUser from './dialogUser/DialogUser';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {

let getUserTopic = props.getUserTopic;

let users = props.dialogsData.map( 
    (dialog) =>
    <li key={dialog.id}>
        <DialogUser
            key={dialog.id} 
            id={dialog.id} 
            name={dialog.name} 
            avatar={dialog.avatar}
            getUserTopic={getUserTopic}
        />
    </li> 
        
)

return (
        <div className={classes.usersList}>
            {users}
        </div>
        )
    }
export default DialogItem;