import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogUser.module.css';

const DialogUser = (props) => {

    let path = "/dialogs/" + props.id;

    let getUserTopic = () => {
                let messageID = props.id;
                props.getUserTopic(messageID);              
            }

    return( 
                    <div className={classes.dialogs_block}>
                        <div className={classes.dialogs_items}>
                            <div className={classes.dialog }>
                                <img src={props.avatar}/>
                                <NavLink to={path} onClick={getUserTopic} activeClassName={classes.active}>{props.name} </NavLink> 
                            </div> 
                        </div>
                    </div>
            )   
}

export default DialogUser;
