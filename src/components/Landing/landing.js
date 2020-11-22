import React, {Component} from 'react';
import "./landing.css";
//import logo from "./../images/typeX.png";
class Landing extends Component{
    render(){
        return(
            <div>  
                <div className="X_Hero">
                    
                <div>
                    <div className="X_Hero-Heading">
                       AI for Cervical Cancer 
                       <br/>
                       <div style={{marginTop: "-20px"}}>
                           Examination
                           </div>
                   </div>                    
                    <div className="X_Hero-SubHeading">
                       Goodbye Big, Bulky and Expensive. 
                       Hello TypeX.
                   </div>                   
                </div>                    
                <div className="X_App">
                    <a href="design.html" class="btn btn--white ">Start App</a>
                </div>
            </div>
            </div>
        );
    }
}

export default Landing;