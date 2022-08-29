import React from "react";
import ActivityItem from "./ActivityItem";
import Data from "./data";
// import Container from "./Container";
class Timeline extends React.Component{
  

constructor(props){
    super(props);
    this.state = {
        activities:[]
    }
  }
componentDidMount(){
    this.setState({
      activities:Data.data
    });
  }
  
  render() {
    const activities = this.state.activities;
    console.log(activities);
     return (       
          
          <div className="content">
            <div className="line"></div>
              {activities.map((activity)=>(
                <ActivityItem activity={activity}/>
                ))} 
                 
          </div>
    );
  }
}
export default Timeline;
