import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './friends/Friends';
import classes from './Nav.module.css';

const Nav = (props) => {

    return(
        <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to={"/profile"} activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to={"/dialogs"} activeClassName={classes.active}>Dialogs</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to={"/users"} activeClassName={classes.active}>Users</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to={"/news"} activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to={"/music"} activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to={"/settings"} activeClassName={classes.active}>Settings</NavLink>
      </div>
      
      <Friends 
        friends={props.friends}
      />
      
      
      </nav>     
    )
}
export default Nav;