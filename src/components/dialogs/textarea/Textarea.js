import React from 'react';
import classes from './Textarea.module.css';

const Textarea = (props) => {
    
    let addMessage = () => { 
        props.addMessage(props.userId);               
    }

    let onChangeMessageValue = (e) => { 
        let text = e.target.value;
        props.updateNewMessageText(text, props.userId)      
    }
    return(
            <div className={classes.textarea}>
                <textarea 
                    value={props.newMessageText} 
                    onChange={onChangeMessageValue}>
                </textarea>
                <button onClick={ addMessage }>Send</button>
            </div>
    )
}

export default Textarea;