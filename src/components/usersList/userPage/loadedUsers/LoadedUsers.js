import classes from './LoadedUsers.module.css';
import image from '../../../../assets/images/Useravatar.png';

const LoadedUsers = (props) => {
    // debugger;
    return  <div className={classes.users}>
                {
                props.users.map(
        
                    (user) => 
                    
                <div className={classes.userBlock} key={user.id}>     
                    <div className={classes.userAvatarButtonBlock}>
                        <div  className={classes.avatar}>
                           <img src={ user.photos.large == null ? image : user.photos.large } alt="Image"/>    
                        </div>
                        <div className={classes.buttonFollow}>
                        
                            { 
                                user.followed 
                                ?
                                <button onClick={ () => { props.unfollow(user.id)} } >Follow</button>
                                :
                                <button onClick={ () => { props.follow(user.id)} } >UnFollow</button>
                            }
           
                        </div>
                    </div>
                    <div className={classes.userInfoBlock}>
                        <div className={classes.userNameAndCountry}>
                            <div className={classes.userName}>
                                <span>name:</span> {user.name}
                            </div>
                            <div className={classes.userCountry}>
                                {/* {'user.location.country'} */}
                            </div>
                        </div>
                        <div className={classes.userStatusAndCity}>
                            <div className={classes.userStatus}>
                                <span>status:</span> {user.status}
                            </div>
                            <div className={classes.userCity}>
                                {/* {'user.location.city'} */}
                            </div>
                        </div>
                    </div>
                </div>
                
                )

            }
            </div>
}
export default LoadedUsers;