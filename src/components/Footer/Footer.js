import React from 'react';
import classes from './Footer.css';

const Footer = () => {
    return (
        <div className = {classes.Footer}>
            <div>
              Sample Project Create via React
            </div>
            <div>
              Based off <span>React Practice Course</span> My Venue
            </div>
            
        </div>
    );
};

export default Footer;