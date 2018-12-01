import React from 'react';
import classes from './Highlights.css';
import Discount from './Discount/Discount';
const Highlights = () => {
    return (
        <div className = {classes.Highlights}>

        <div className = {classes.Section1}>
                <h2>Highlights</h2>
                <p>
                    Lorem ipsum dolor site amet consectetur, adipisicing elit. Quibusdam, debitis vel quasi deleniti officiis rem enim ullam hic, sequi, animi recusandae ipsum dolore? Eveniet, libero ullam dolorem iure quisquam earum.
                    Holo ipsum dolor sit amet, consectetur adipisicing elit. Quasi iste voluptatem velit fugiat, accusamus necessitatibus repellendus fugit, aperiam reprehenderit minus assumenda mollitia aut aliquam unde odio eum provident debitis ratione!
                </p>
        </div>
        
        <div className = {classes.Section2}>
                <div className = {classes.Special}>
                        <div className = {classes.percentage}>
                            <span><Discount/></span> 
                            <div>Off</div>
                        </div>

                        <div className = {classes.EarlyBird}>
                                <h4>
                                    Early Bird Ends February 4th
                                </h4>
                                <p>
                                    Dolor sit amet consectetur adipisicing elit. Neque, officia! Voluptatum nobis, laboriosam natus neque illum, quos provident distinctio consequuntur culpa ipsum eaque ad! Ducimus optio possimus perspiciatis impedit vitae!
                                </p>

                        </div>
                </div>
        </div>
          
            
        </div>
    );
};

export default Highlights;