import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import Wurzburg2D from './Wurzburg2D';
import React, { Component } from 'react';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg2D1');
}

class Wurzburg2D1 extends Component {
    
  render() {
    
    return ( 
      <div>
        <Wurzburg2D inside="true" {...this.props}/>
        <CookieConsent 
            enableDeclineButton 
            buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
            onAccept={() => {
                ReactGA.initialize('UA-192893120-1');
                ReactGA.pageview('/wurzburg2D1');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent> 
      </div>  
    );
  }
}

export default Wurzburg2D1;