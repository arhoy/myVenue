import React from 'react';
import classes from './CountDownMessage.css';


const CountDownMessage = (props) =>{

    let message =
        <div className = {classes.CountDownMessage}>
                <div>Enter time</div>
                <input min = "1" type="number" placeholder = "time in seconds" onChange = {props.timeChange} value = {props.countDown}/>
                <button onClick = {props.countDownStart}>Start</button>   
        </div>

        if(props.hasStarted && !props.hasFinished){
            message = 
            <div className = {classes.CountDownMessage}>
                    <div>Don't give up! </div>
                    <div>{props.timeLeft}</div>
          
            </div>

        }
        if(props.hasFinished){
            message = 
            <div className = {classes.CountDownMessage}> 
                <div>Time's Up </div>
                <button onClick = {props.countDownReset}>Reset</button>  
            </div>
        }
    
    return (
       message
    )
}

export default CountDownMessage;