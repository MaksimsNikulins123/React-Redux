// import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from'./Header.module.css';

const Header = (props) => {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src="https://miro.medium.com/max/1818/1*mSSx4OANxoalNaQztIHYIA.png" alt="logo"/>
            </div>  
            <div className={classes.auth}>

                {
                    props.isAuth
                    ?
                    <div>
                        Welcome
                        <p>{props.login}</p>
                    </div>
                    
                    :
                    <div>
                        <div className={classes.login}>
                            {/* <input type="button" value="Login"/> */}
                            <NavLink to={'/login'}>Login</NavLink>
                        </div>
                        <div className={classes.register}>
                            {/* <input type="button" value="Register"/> */}
                            <NavLink to={'/register'}>Register</NavLink>
                        </div>
                    </div>
                }
                
                
                
                
            </div>
        </header>
    )
}
export default Header;