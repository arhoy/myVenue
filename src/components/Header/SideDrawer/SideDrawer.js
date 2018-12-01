import React from 'react';

import classes from './SideDrawer.css';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll';


const SideDrawer = (props) => {

    const scrollToElement = (element) =>{
        scroller.scrollTo(element,{
            duration: 700,
            delay: 10,
            smooth:true
        })
        props.onClose(false);
    }
    return (
        <div className = {classes.SideDrawer}>
           <Drawer
                anchor = "right"
                open = {props.open}
                onClose = {props.onClose}
           >
                <List component = "nav">
                        <ListItem
                            button onClick = {()=> scrollToElement('featured')}
                        >
                            Event Starts In
                        </ListItem>
                        <ListItem
                            button onClick = {()=> scrollToElement('venueInfo')}
                        >
                            Venue Info
                        </ListItem>
                        <ListItem
                            button onClick = {()=> scrollToElement('highlights')}
                        >
                            Highlights
                        </ListItem>
                        <ListItem
                            button onClick = {()=> scrollToElement('pricing')}
                        >
                            Pricing
                        </ListItem>
                        <ListItem
                             button onClick = {()=> scrollToElement('more')}
                        >
                            More Events
                        </ListItem>
                </List>
           </Drawer>
            
        </div>
    );
};

export default SideDrawer;