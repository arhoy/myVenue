import React, { Component } from 'react';
import classes from './TimeUntil.css';
import Slide from 'react-reveal/Slide';


class TimeUntil extends Component {

    state = {
        deadline: 'Dec, 31, 2018',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getTimeUntil = (deadline)=>{
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0){
            console.log('time has passed');
        }
        else{
       
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/1000/60/60)%24);
            const days = Math.floor((time/1000/60/60/24));
      
            this.setState(
                {seconds:seconds,minutes:minutes,hours:hours,days:days}
            )
        }
    
    }
    componentDidMount(){
        setInterval( ()=> this.getTimeUntil(this.state.deadline),1000)
    }
    render() {
        return (
            <Slide left delay = {2000}>
                <div className = {classes.TimeUntil}>
                <h4>Event Count Down</h4>
                    <div className = {classes.TimeBox}>
                    
                        <div>
                        <span>{this.state.days}</span> 
                        </div>
                        <div>Days</div>
                    </div>
                    <div className = {classes.TimeBox}>
                    
                    <div>
                    <span>{this.state.hours}</span> 
                    </div>
                    <div>Hours</div>
                </div>
                <div className = {classes.TimeBox}>
                    
                    <div>
                    <span>{this.state.minutes}</span> 
                    </div>
                    <div>Minutes</div>
                </div>
                <div className = {classes.TimeBox}>
                    
                    <div>
                    <span>{this.state.seconds}</span> 
                    </div>
                    <div>Seconds</div>
                </div>

                    
                
                </div>
         
            </Slide>
            
       
           
        );
    }
}

export default TimeUntil;