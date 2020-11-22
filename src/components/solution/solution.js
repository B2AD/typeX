import React from 'react';
import "./solution.css"
import pic1 from "../../images/Clinics-black-green.png";
import pic2 from "../../images/Hospitals-black-green.png";
import pic3 from "../../images/Rural_black-green.png";

export class SolutionNeed extends React.Component{
    render(){
        
        return (
                <div className="container">
                    <div className="X_Sol-heading">
                        A solution for every need
                    </div>
                    <div className="X_Sol-subheading">
                        Wheather you're a women's health provider working independently, or a hospital looking to optimize ROI and service, TypeX has the solution to get you on your way.
                    </div>
                    <div className="row ">
                        <div className="col-sm">
                            <div class="card " style={{width:"20rem", border: "none" }}>
                                <img  src={pic1} class="card-img-top" alt="..."/>
                                <div  class="card-body">
                                    <h5 class="card-title">TypeX for women's health practitioners and small clinics</h5>
                                    
                                </div>
                          </div>
                          </div>
                          <div className="col-sm">
                            <div class="card " style={{width:"20rem", border: "none" }}>
                                <img  src={pic2} class="card-img-top" alt="..."/>
                                <div  class="card-body">
                                    <h5 class="card-title">TypeX for health networks and hospitals</h5>
                                   
                                </div>
                          </div>
                          </div>
                          <div className="col-sm">
                            <div class="card " style={{width:"20rem",  border: "none" }}>
                                <img  src={pic3} class="card-img-top" alt="..."/>
                                <div  class="card-body">
                                    <h5 class="card-title">TypeX for NGO's and Global Health</h5>
                                   
                                </div>
                          </div>
                          </div>
                          
                           
                    </div>                   
            </div>
        );
    }
}
export default SolutionNeed;