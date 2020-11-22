import React from 'react';
import "./connectpoc.css";
import mockup from "../../images/mockup.png";
import doctor from "../../images/doctor.png";
import location from "../../images/location.png";
import time from "../../images/time.png";

export class ConnectPOC extends React.Component{
    render(){
        
        return (
                <div className=" CR container-fluid">
                    <div className="row">

                        <div className="col-sm">
                            <div className="X_CR-Heading">
                                Connected at the point of care
                            </div>  
                            <div className="X_CR-SubHeading">
                               Intutive and portable telegynecology platform for expert-level care in any practive setting.
                            </div> 
                           

                            <div className="container">
                                <div className="row">
                             <div class="col-sm">
                                <div class="card " style={{width: "12rem", border: "none" }}>
                                <img style={{padding:"50px"}}  src={doctor} class="card-img-top" alt="..."/>
                                <div style={{marginTop: "-50px"}}  class="card-body">
                                    <h5 class="card-title">Expert Opinion</h5>
                                    <h7 class="card-subtitle"> All clinical decision support based on the analysis of leading colposcopicics</h7>
                                </div>
                            </div>
                            </div>
                            <div class="col-sm">
                                <div class="card " style={{width: "12rem", border: "none"}}>
                                <img style={{padding:"50px"}}  src={location} class="card-img-top" alt="..."/>
                                <div style={{marginTop: "-50px", padding:"0"}} class="card-body">
                                    <h5 class="card-title">Point of Care</h5>
                                    <h7 class="card-subtitle">VisualCheck & the EVA System combine to provide high quality visualization and quality controls for any location</h7>
                                </div>
                            </div>
                            </div>
                            <div class="col-sm">
                                <div class="card " style={{width: "12rem", border: "none"}}>
                                <img style={{padding:"50px"}} src={time} class="card-img-top" alt="..."/>
                                <div style={{marginTop: "-68px"}} class="card-body">
                                    <h5 class="card-title">Save Time</h5>
                                    <h7 class="card-subtitle">AI answers are provided quickly to improve the time management of patient visits</h7>
                                </div>
                            </div>
                            </div>
                        </div>
                            </div>
                        </div>
                       

                        <div className="nm col-sm">
                            <img width="80%" src={mockup} alt="NepalMap"/>
                       

                            
                        </div>            
                    </div>                   
            </div>
        );
    }
}
export default ConnectPOC;