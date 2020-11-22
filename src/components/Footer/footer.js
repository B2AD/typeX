import React from 'react';
import "./footer.css";

export class Footer extends React.Component {
    render(){
        return(
            <>
                <div className="X_footer-main">
                    ABCEDEFGHIJKLMNOPQRSTUVWXYZ
                </div>
                <div className="X_footer-copyright">
                    ©TypeX 2020 | Anjil, Bijay, Bikash and Devi
                </div>
            </>
        );
    }
}

export default Footer;