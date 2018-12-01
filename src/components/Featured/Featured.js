import React from 'react';
import Car from './Car/Car';
import classes from './Featured.css';
import TimeUntil from './TimeUntil/TimeUntil';


const Featured = () => {
    return (
        <div className = {classes.Featured}>
           <Car/>
           <TimeUntil/>
        </div>
         
    );
};

export default Featured;