import React from 'react';
import Slider from 'react-slick';
//import classes from './Car.css';
//import TimeUntil from '../TimeUntil/TimeUntil';
import slide_1 from '../../../resources/images/slide_1.jpg';
import slide_2 from '../../../resources/images/slide_2.jpg';
import slide_3 from '../../../resources/images/slide_3.jpg';



const Car = () => {

    
    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnHover: false
    }

    return (
        <div 
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow:'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                   <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_1}) no-repeat center`,
                            backgroundSize:'cover',
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_2}) no-repeat center`,
                            height:`${window.innerHeight}px`,
                            backgroundSize:'cover'
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_3}) no-repeat center`,
                            height:`${window.innerHeight}px`,
                            backgroundSize:'cover'
                        }}
                   ></div>
                </div>
            </Slider>
            
        </div>
    );
};

export default Car;