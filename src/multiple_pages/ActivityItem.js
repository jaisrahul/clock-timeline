import React from "react";
import Clock from "./Digital_clock";
// const moment = require('moment') 
class ActivityItem extends React.Component{
   render(){
      const {activity} = this.props;
      return(
        <div className="item">
        <div className="avatar">
          <img
          alt={activity.text}
          src={activity.user.avatar}/>
        </div>
        <span className="time">
        <Clock/>
        {/* {moment(activity.created_at).format('HH:MM:SS')} */}
        </span> 
        <p>{activity.text}</p>
        <div className="CommentsCount">
          {activity.comments.length}
        </div>
        </div>
      );
    }
}
export default ActivityItem;