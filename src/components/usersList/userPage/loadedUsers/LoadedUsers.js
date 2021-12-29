import classes from './LoadedUsers.module.css';
import image from '../../../../assets/images/Useravatar.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const LoadedUsers = (props) => {
    // debugger;
    return  <div className={classes.users}>
                {
                props.users.map(
        
                    (user) => 
                    
                <div className={classes.userBlock} key={user.id}>     
                    <div className={classes.userAvatarButtonBlock}>
                        <div  className={classes.avatar}>
                        
                        <NavLink to={"/profile/" + user.id}><img src={ user.photos.large == null ? image : user.photos.large } alt="user"/></NavLink>
                            
                        </div>
                        <div className={classes.buttonFollow}>
                        
                            { 
                          
                                user.followed 
                                ?
                                <button onClick={ () => { 
                                    // debugger;
                                    axios
                                    .delete(
                                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, 
                                        {
                                            withCredentials: true,
                                            headers: {
                                                    "API-KEY": "70add02e-a4e4-47b8-b7fd-34d69ec0a09d"
                                                    }
                                        }
                                    )
                                    .then(response => {
                                        // debugger;
                                        // console.log(response)
                                        if(response.data.resultCode === 0)
                                        {
                                            props.unfollow(user.id)
                                        }

                                    
                                        });

                                    } } >UnFollow</button>
                                :
                                <button onClick={ () => { 
                                    // debugger;
                                    axios
                                        .post(
                                            `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, 
                                            {},
                                            {
                                                // method: "POST",
                                                withCredentials: true,
                                                headers: {
                                                        "API-KEY": "70add02e-a4e4-47b8-b7fd-34d69ec0a09d"
                                                        }
                                            }
                                        )
                                        .then(response => {
                                            // debugger;
                                            console.log(response)
                                            if(response.data.resultCode === 0)
                                            {
                                                props.follow(user.id)
                                            }
                                      
                                  
                                    });


                                    } } >Follow</button>
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