import React from 'react';
import "./countryreach.css";
import nepal from "../../images/NepalMap.png";
import doctor from "../../images/doctor.png";
import location from "../../images/location.png";
import time from "../../images/time.png";

export class CountryReach extends React.Component{
    render(){
        
        return (
                <div className=" CR container-fluid">
                    <div className="row">

                        <div className="col-sm">
                            <div className="X_CR-Heading">
                                Country Reach
                            </div>  
                            <div className="X_CR-SubHeading">
                                Serving More than 40,000 patients in over 30 Districts.
                            </div> 
                        
                            <div className="X_CR-Button">
                                <button className="btnn xpurple-btn">Customer Stories</button>
                            </div>
                     
                       </div>

                        <div className="nm col-sm">
                            <img width="100%" src={nepal} alt="NepalMap"/>
                        </div>            
                    </div>                   
            </div>
        );
    }
}
export default CountryReach;