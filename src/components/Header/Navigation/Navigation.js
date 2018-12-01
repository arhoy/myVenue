import React from 'react';
import classes from './Navigation.css';
import { NavLink } from 'react-router-dom'



const Navigation = () => {
    return (
        <div className = {classes.Navigation}>
            <ul>
                <li><NavLink to = '/'>Home</NavLink></li>
                <li><NavLink to = '/count-down-timer'>Timer</NavLink></li>
                <li><NavLink to = '/about'>About</NavLink></li>
            </ul>
        </div>
       
  
    )
}
    
  
  export default Navigation;
  