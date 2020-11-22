import React from 'react';
import "./content.css";
import capture from "../../images/capturebg.png";
import document from "../../images/documentbg.png";
import collaborate from "../../images/collaboratebg.png";
import educate from "../../images/educatebg.png";
import Analyze from "../../images/analyze.png";


export class Content extends React.Component{
    render(){

        
        return (
    <div className="X_system">
        <div className="X_system-textarea">            
                <div className="X_system-header">
                    TypeX System
                </div>
                <div className="X_system-body">
                Simplify your clinical workflow by streamlining how you conduct, record, and review
                patient cases and gynecological examinations.
                </div>
        </div>

        <div className="X_system-process">
           <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="card styleCard" style={{width: "10rem"}}>
                            <div class="card-body">
                             <h5 class="card-title">1. Capture</h5>
                                
                            </div>
                        <img  src={capture} class="card-img-bottom" alt="..."/>
                </div>
                </div>

                <div class="col-sm">
                    <div class="card styleCard" style={{width: "10rem"}}>
                            <div class="card-body">
                             <h5 class="card-title">2. Document</h5>
                                
                            </div>
                        <img src={document} class="card-img-top" alt="..."/>
                </div>
                </div>

                <div class="col-sm">
                    <div class="card styleCard" style={{width: "11rem"}}>
                            <div class="card-body">
                             <h5 class="card-title">3. Collaborate</h5>
                                
                            </div>
                        <img src={collaborate} class="card-img-top" alt="..."/>
                </div>
                </div>

                <div class="col-sm">
                    <div class="card styleCard" style={{width: "10rem"}}>
                            <div class="card-body">
                             <h5 class="card-title">4. Educate</h5>
                                
                            </div>
                        <img src={educate} class="card-img-top" alt="..."/>
                </div>
                </div>

                <div class="col-sm">
                    <div class="card styleCard" style={{width: "10rem"}}>
                            <div class="card-body">
                             <h5 class="card-title">5. Analyze</h5>
                                
                            </div>
                        <img src={Analyze} class="card-img-top" alt="..."/>
                </div>
                </div>
               
            </div>
                    </div>
            </div>
                    </div>
     
    );
}
}


export default Content;