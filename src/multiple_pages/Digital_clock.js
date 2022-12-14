import React from "react";

class Digital_clock extends React.Component{
    getTime(){
      const currentTime = new Date();
      return{
          hours : currentTime.getHours(),
          minutes : currentTime.getMinutes(),
          seconds : currentTime.getSeconds(),
          ampm : currentTime.getHours>= 12 ? 'am':'am'    
    }
    }
    constructor(props){
       super(props);
       this.state = this.getTime();
    }
    componentDidMount(){
        this.setTimer()
    }
    setTimer(){
    clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    } 
    updateClock(){
        this.setState(this.getTime, this.setTimer);
    } 
    render(){
        const {hours,minutes,seconds,ampm} = this.state;
      return(
        <div className="clock">
            {
                hours === 0 ? 12 :(hours > 12) ?
                   hours - 12 : hours
            }:{
                minutes > 9 ? minutes : `0${minutes}`
            }:{
                seconds > 9 ? seconds : `0${seconds}`
            } {ampm}      
        </div> 
        );
    }
}
export default Digital_clock;










































































//  return <h1>rahul</h1>

 









    // render(){
    //     const currentTime = new Date(),
    //           hours = currentTime.getHours(),
    //           minutes = currentTime.getMinutes(),
    //           seconds = currentTime.getSeconds(),            
    //           ampm = hours >= 12 ? 'pm' : 'am';
    //     return(
    //        <div className="clock">
    //        {
    //            hours === 0 ? 12 : 
    //                 (hours > 12) ?
    //                    hours - 12 : hours
    //        }:{
    //             minutes > 9 ? minutes : `0${minutes}`
    //         }:{
    //             seconds > 9 ? seconds : `0${seconds}`
    //         } {ampm}      
    //        </div> 
    //     );
    // }


