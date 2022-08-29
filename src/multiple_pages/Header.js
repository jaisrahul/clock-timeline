import React from "react";
class Header extends React.Component{
  render(){
      return(
        <div className="notificationsFrame">
        <div className="panel">
        <div className="header">

<div className="menuIcon">
  <div className="dashTop"></div>
  <div className="dashBottom"></div>
  <div className="circle"></div>
</div>

<div> <h3 className="title mb-5">
  {this.props.title}
 
</h3>
<input
  type="text"
  className="searchInput"
  placeholder="Search ..." />

<div className="fa fa-search searchIcon"></div>
</div></div>
     </div>
    </div>
      );
  }
}
export default Header;
