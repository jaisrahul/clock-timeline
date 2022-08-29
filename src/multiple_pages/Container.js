import React from "react";
import Timeline from './Timeline';
import Header from './Header';
import Footer from "./footer";

class Container extends React.Component{
   render(){
       return(
        <div className="notificatioinFrame">
        <div className="panel">
         <Header title="Header" /> 
        {/* <Timeline activities={this.activities}/> */}
        <Timeline />
        <Footer />
      </div>
       </div>
    );
   }
}
export default Container;