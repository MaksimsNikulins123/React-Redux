import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';

const Users = (props) => {

    let getUsers = () => {
        if(props.users.length === 0){
    
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
        }
    }
        return <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(
        
                    (user) => 
    
                <div className={classes.userBlock} key={user.id}>
                    <div className={classes.userAvatarButtonBlock}>
                        <div  className={classes.avatar}>
                            <img src={user.avatar}/>    
                        </div>
                        <div className={classes.buttonFollow}>
                        
                            { 
                                user.followed 
                                ?
                                <button onClick={ () => { props.unfollow(user.id)} } >Follow</button>
                                :
                                <button onClick={ () => {props.follow(user.id)} } >UnFollow</button>
                            }
           
                        </div>
                    </div>
                    <div className={classes.userInfoBlock}>
                        <div className={classes.userNameAndCountry}>
                            <div className={classes.userName}>
                                {user.name}
                            </div>
                            <div className={classes.userCountry}>
                                {'user.location.country'}
                            </div>
                        </div>
                        <div className={classes.userStatusAndCity}>
                            <div className={classes.userStatus}>
                                {user.status}
                            </div>
                            <div className={classes.userCity}>
                                {'user.location.city'}
                            </div>
                        </div>
                    </div>
                </div>
                
                )

            }
            
            
        </div>
}     
    

export default Users;