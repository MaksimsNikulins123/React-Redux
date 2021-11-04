import React from 'react';
import classes from './UserInfo.module.css';

const UserInfo = () => {
    return(
        <div className={classes.item}>
            <div className={classes.userlogo}>
            
                <img src='https://cdn3.vectorstock.com/i/1000x1000/40/57/social-network-user-design-vector-9544057.jpg' />
            </div>
            <div className={classes.description}>
                <div>
                    <p>Max</p>  
                </div>
                <div>
                    <p>Date of birth: 21 June 1983</p>
                    <p>City: Ventspils</p>
                    <p>Education: BSA</p>
                    <p>Linkedin profile: linkedin.com/in/maksim-nikulin-bb9775202</p>
                </div>
            </div>
        </div>
    )
}
export default UserInfo;