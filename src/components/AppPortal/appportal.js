import React from 'react';
import "./appportal.css";

export class AppPortal extends React.Component{
    render(){
        
        return (
                <div className="X_AppPortal">
                <div className="X_AP-Heading">
                       App & Portal
                   </div>  

                    <div className="X_AP-SubHeading">
                      The TypeX System combines high-quality optics, image and video capture with secure, HIPAA-compliant online data management, allowing you to document cases, add annotations and filters direcly to images, and export the information into your EMR, simplifying the medical workflow.
                   </div> 
                </div>
        );
    }
}
export default AppPortal;