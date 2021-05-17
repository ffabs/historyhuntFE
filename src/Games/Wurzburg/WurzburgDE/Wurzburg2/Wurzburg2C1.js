import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Wurzburg2C from './Wurzburg2C';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg2C1');
}

class Wurzburg2C1 extends Component {
    
  render() {
    
    return ( 
      <div>
        <Wurzburg2C inside="true" {...this.props}/>
        <CookieConsent 
        buttonText="Ich akzeptiere"
        declineButtonText="Ich lehne ab"
          enableDeclineButton 
          buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
          onAccept={() => {
              ReactGA.initialize('UA-192893120-1');
              ReactGA.pageview('/DE/wurzburg2C1');
          }}
          >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
        </CookieConsent>
      </div>  
    );
  }
}

export default Wurzburg2C1;