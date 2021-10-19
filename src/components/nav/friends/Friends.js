import Friend from './friend/Friend';
import classes from './Friends.module.css';


const Friends = (props) => {

let friendList = props.friends.map( (friend) => <Friend key={friend.id} id={friend.id} name={friend.name} avatar={friend.avatar}/>  )  
    
    return(
        <div className={classes.block}>
            <h3>Friends</h3>
            <div className={classes.friends}>
                { friendList }  
            </div>
        </div>
    )
}
export default Friends;