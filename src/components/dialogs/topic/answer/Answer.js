// import React from 'react';
import classes from './Answer.module.css';

const Answer = (props) => {

    return(
        <div className={classes.answer}>
            {props.answer}
        </div>
    )

}
export default Answer;