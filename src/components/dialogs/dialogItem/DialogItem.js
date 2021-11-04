import React from 'react';
import DialogUser from './dialogUser/DialogUser';

const DialogItem = (props) => {

let getUserTopic = props.getUserTopic;

let users = props.dialogsData.map( 
    (dialog) => 
        <DialogUser
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
export default DialogItem;