import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Wurzburg2C from './Wurzburg2C';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg2C2');
}

class Wurzburg2C2 extends Component {
    
  render() {
    
    return ( 
      <div>
        <Wurzburg2C inside="false" {...this.props}/>
        <CookieConsent 
          enableDeclineButton 
          buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
          onAccept={() => {
              ReactGA.initialize('UA-192893120-1');
              ReactGA.pageview('/wurzburg2C2');
          }}
          >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>
      </div>  
    );
  }
}

export default Wurzburg2C2;