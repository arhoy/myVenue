import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class Discount extends Component {
    state = {
        discountStart: 0,
        discountEnd: 30
    }
    percentageHandler = ()=>{
     
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({discountStart: this.state.discountStart +1})
        }
       
    }
    componentDidUpdate(){
        setTimeout(()=>{
            this.percentageHandler();
        },50);
    }
    render() {
        return (
            <Fade
                onReveal = {()=>this.percentageHandler()}
            >
              <div>
                   {this.state.discountStart}%
              </div>  
            </Fade>
         
        );
    }
}

export default Discount;