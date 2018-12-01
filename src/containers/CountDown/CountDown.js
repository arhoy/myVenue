
import React, {Component} from 'react';
import classes from './CountDown.css';
import CountDownMessage from '../../components/CountDownMessage/CountDownMessage';

class CountDown extends Component {
   state = {
       countDown: 3,
       timeElapsed:0,
       hasFinished: false,
       hasStarted:false
   };

   countDownStart =()=>{

       // count down start state
       this.setState({hasFinished:false,hasStarted:true,isPaused:false}) 
   
       if(this.state.countDown === 0 ){
            this.setState({hasFinished:true});
        }
       if(!this.state.hasFinished){
            this.mySetInterval();
       } 
   }

   countDownReset = () =>{
        console.log('I was reset');
        // change the state back the original state.
        this.setState({countDown:this.state.timeElapsed,timeElapsed:0,hasFinished:false,hasStarted:false,isPaused:false}) 
    

   }

   timeChangeHandler = (e) =>{
        this.setState({countDown:e.target.value});
   }

   clearIntervalHandler = (timer) =>{
        clearInterval(timer);
   }

   mySetInterval = () =>{
    var timer = setInterval(()=>{
  
        let counter = this.state.countDown;
        let antiCounter = this.state.timeElapsed;
        
    //  check to make sure count is valid
            if(counter > 0){
                counter--;
                antiCounter++;
                this.setState({countDown:counter});
                this.setState({timeElapsed:antiCounter});
                if (counter <= 0) {
                    this.setState({hasFinished:true});
                    this.clearIntervalHandler(timer);
                }
            }
        
        }, 1000);

}

   render(){
  
       return(
           <div className = {classes.CountDown}>
                 <CountDownMessage
                    timeChange = {this.timeChangeHandler}
                    countDown = {this.state.countDown}
                    countDownStart = {this.countDownStart}
                    countDownReset = {this.countDownReset}
                    hasStarted = {this.state.hasStarted}
                    hasFinished = {this.state.hasFinished}
                    timeLeft = {this.state.countDown}
                 />
           </div>
       )
   }
}

export default CountDown;

