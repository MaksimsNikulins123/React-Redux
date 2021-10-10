import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
  
    let changeMessages = () => {
        let messageID = props.id;
        props.getUserTopic(messageID);
        
    }

    return( 
            <div className={classes.dialogs_block}>
                <div className={classes.dialogs_items}>
                    <div className={classes.dialog }>
                        <img src={props.avatar}/>
                        <NavLink to={path} onClick={changeMessages} activeClassName={classes.active}>{props.name} </NavLink> 
                    </div> 
                </div>
            </div>
    )   
}
export default DialogItem;