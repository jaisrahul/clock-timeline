import React from "react";

class Test extends React.Component{
    static str="";
    constructor(props){
        super(props);
        console.log(" hi i am constructor");
     }
    componentDidMount(){
        Test.str += "didmount";
        console.log('I am componentDidMount ');
    }
    componentDidUpdate(){
        Test.str += "didupdate";
        console.log('I am componentDidUpdate ');
    }
    componentWillUnmount(){
        Test.str += "willun";
        console.log('I am componentWillUnmount ');
    }
  render(){
     return(
        <div>
            {Test.str}
         </div>
      );

  }

}
export default Test;