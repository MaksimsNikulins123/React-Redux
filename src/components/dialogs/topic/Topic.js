import React from 'react';
import Message from './message/Message';
import Answer from './answer/Answer';

import classes from './Topic.module.css';

const Topic = (props) => {

    let messages = props.userTopic.messageData.map( (message) => <Message id={message.id} key={message.key}  message={message.message}/> )
    let answers = props.userTopic.answerData.map( (answer) => <Answer id={answer.id} key={answer.key}  answer={answer.answer}/> )
    return(
            <div className={classes.messageBlock}>
                <div >
                    {messages}
                </div>
                <div >
                    {answers}
                </div>
                
            </div>
    ) 
}
export default Topic;