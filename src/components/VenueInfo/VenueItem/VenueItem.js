import React from 'react';
import classes from './VenueItem.css';
const VenueItem = (props) => {
    return (
        <div className = {classes.VenueItem}>
            <div className = {classes.icon__holder}
                style = {{backgroundColor: `${props.bgColor}`}}
            >
                    <div className = {classes.icon}
                        style =  {{background: `url(${props.icon})`}}
                    >
                     </div>
            
            </div>

            <div className = {classes.info_header}>{props.header}</div>
            <div className = {classes.blurb}>
                <div className = {classes.info_blurb}>{props.blurb1}</div>
                <div className = {classes.info_blurb}>{props.blurb2}</div>
            </div>
          
        </div>
    );
};

export default VenueItem;