import React from 'react';
import "./augI.css";

export class AuI extends React.Component{
    render(){
        
        return (
                <div className="X_AuI container-fluid">
                    <div className="row  ">

                        <div className="X_AuI-textarea col-sm">
                            <div className="X_AuI-Heading">
                                Augmented Intelligence
                            </div>  
                            <div className="X_AuI-SubHeading">
                                MobileODT is committed to harnessing the most advanced technologies to build cutting-edge tools for healthcare providers, extending the capabilities of the EVA System to help them save more lives. Medical-grade Artificial Intelligence (AI) has tremendous promise to support healthcare providers better care for their patients. It can give patients the best possible diagnosis at the right time, enable the healthcare provider to determine the best next steps for that patient, and allow patients to find the resources to address the disease.
                            </div> 
                            <div className="X_AuI-Button">
                                <button className="btnn xpurple-btn">Learn More about AI</button>
                            </div>   
                        </div>

                        <div className="Coll col-sm">
                            <div className="X_AuICard-Heading">
                                Click to Open
                            </div> 
                       

                            <ul class="collapse-list">
                                <li>
                                    <input className="collapse-open" type="checkbox" id="collapse-1"/>
                                    <label class="collapse-btn" for="collapse-1">Looking to the future</label>
                                    <div class="collapse-painel">
                                    <div class="collapse-inner">
                                    We believe that healthcare providers deserve the most advanced, most powerful tools possible and that no healthcare provider should be restricted from providing her patient with the best possible diagnostic test due to infrastructure constraints or lack of available expertise.
                                </div>
                                </div>
                                </li>
                                <li>
                                <input class="collapse-open" type="checkbox" id="collapse-2"/>
                                <label class="collapse-btn" for="collapse-2">Enhanced diagnostics</label>
                                <div class="collapse-painel">
                                    <div class="collapse-inner">
                                        AI is not replacing the healthcare provider by any means. Medical-grade AI is primarily a powerful tool to extend the diagnostic power of laboratory tests. In the past, laboratory technicians were taught to identify patterns in what they saw microscopically and make decisions accordingly. Today, neural networks are taught to recognize patterns using tens of thousands of images and their associated ‘ground truth’ outcomes.  AI-empowered diagnostic tests will put advanced diagnostics within reach of every person on the planet with an accessible mobile phone, computing device, or internet connection.
                                    </div>
                                </div>
                            </li>
                            <li>
                                <input class="collapse-open" type="checkbox" id="collapse-3"/>
                                <label class="collapse-btn" for="collapse-3">For experts and non-experts alike</label>
                                <div class="collapse-painel">
                                    <div class="collapse-inner">
                                        This use of AI for decision support is helpful for experts as well as non-experts conducting examinations. For expert healthcare providers conducting a diagnostic examination, AI can provide an automated second opinion. For non-experts, AI can enable the immediate examination of a patient when local expert opinion is limited and making diagnostic examinations accessible that may have previously been limited by infrastructure and resource availability.
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </div>            
                    </div>                   
            </div>
        );
    }
}
export default AuI;