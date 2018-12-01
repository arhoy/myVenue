import React from 'react';
import classes from './VenueInfo.css';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import icon_menu from '../../resources/images/icons/menu.png';
import icon_ticket from '../../resources/images/icons/ticket.png';
import VenueItem from './VenueItem/VenueItem';
import Zoom from 'react-reveal/Zoom';

const VenueInfo = () => {


    return (
        <div className = {classes.VenueInfo}>
            <Zoom duration = {500}>
                <VenueItem
                    icon =   {icon_calendar}
                    bgColor = '#00AECC'
                    header = 'Event Date & Time'
                    blurb1 = 'June 21st 2019'
                    blurb2 = 'Boulder Co'
                />
            </Zoom>
            <Zoom duration = {500} delay = {700}>
                <VenueItem
                    icon = {icon_location}
                    bgColor = '#A86CC1'
                    header = 'Event Location'
                    blurb1 = '9000 Neutron Street'
                    blurb2 = 'Oakland CA'
                />
            </Zoom>
             <Zoom duration = {500} delay = {200}>
                <VenueItem
                    icon = {icon_menu}
                    bgColor = '#4FD683'
                    header = 'After Party'
                    blurb1 = 'Nora En Pure'
                    blurb2 = 'Venice Beach Ave'
                />
             </Zoom>
          
             <Zoom duration = {500} delay = {500}>
                <VenueItem
                    icon = {icon_ticket}
                    bgColor = '#E76EB1'
                    header = 'Ticket Info'
                    blurb1 = 'VIP Listings Here'
                    blurb2 = 'Regular Tickets'
                />
             </Zoom>
         
           
        </div>
    );
};

export default VenueInfo;