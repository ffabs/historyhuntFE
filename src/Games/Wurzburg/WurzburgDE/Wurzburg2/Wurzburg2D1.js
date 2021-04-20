import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import Wurzburg2D from './Wurzburg2D';
import React, { Component } from 'react';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg2D1');
}

class Wurzburg2D1 extends Component {
    
  render() {
    
    return ( 
      <div>
        <Wurzburg2D inside="true" {...this.props}/>
        <CookieConsent 
            buttonText="Ich akzeptiere"
            declineButtonText="Ich lehne ab"
            enableDeclineButton 
            buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
            onAccept={() => {
                ReactGA.initialize('UA-192893120-1');
                ReactGA.pageview('/DE/wurzburg2D1');
            }}
            >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
        </CookieConsent> 
      </div>  
    );
  }
}

export default Wurzburg2D1;