import React from "react";

class Content extends React.Component{
    render(){
        return(
            <div className="content">
                <div className="line"></div>
                {/* {"Timeline item"} */}
                   <div className="item">
                    <div className="avatar">
                          <img 
                           alt="Doug"
                            src="https://www.pinkvilla.com/imageresize/yash_working_still_from_kgf_chapter_1_0.jpeg?width=752&format=webp&t=pvorg"/>
                           <span className="time">An hour ago</span>
                           <p>At lunch hour</p>
                </div>
                         <div className="CommentCount"></div>
                     </div>
                     {/* {"...."} */}
            </div>
        );
    }
}

export default Content;