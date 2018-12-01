import React from 'react';
import classes from './Items.css';
import Auxx from '../../../hoc/Auxx/Auxx';

const Items = (props) => {
    const data = props.items.map((item)=>(
            <div key = {item.id} className = {classes.Items}>
                <h4>{item.title}</h4>
                <div>{item.location}</div>
                <div>{item.date}</div>
            </div>
        )
    );

    return (
        <Auxx>
            {data}
        </Auxx>
    );
};

export default Items;