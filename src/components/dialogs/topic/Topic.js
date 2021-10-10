import Answer from './answer/Answer';
import Message from './message/Message';

import classes from './Topic.module.css';

const Topic = (props) => {
  

    let messages = props.userTopic.messageData.map( (message) => <Message key={message.id} id={message.id} message={message.message}/> )
    let answers = props.userTopic.messageData.map( (answer) => <Answer key={answer.id} id={answer.id} answer={answer.answer}/> )
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