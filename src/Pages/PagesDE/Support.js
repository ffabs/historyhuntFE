import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Header from '../../Components/ComponentsDE/Header';
import Footer from '../../Components/ComponentsDE/Footer';
import '../../App.css';
import './Pages.css';
import { SocialIcon } from 'react-social-icons';
import flying from '../../Images/flying.png';
import feedbackicon from '../../Images/feedbackicon.png';
let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/de/support-us');
}

class Support extends Component {

  render() { 
    return ( 
      <div className="home">
        <Header page={'Support'}/> 
        <div className="support-page">     
          <div className="section-title">Vielen Dank für Ihr Interesse, uns zu unterstützen!</div>
          <img src={flying} className="home-howitworks-image" alt="flying" />
          
          <div className="howitworks-step-subtitle">Ciceru ist ein unabhängiges, selbst finanziertes Projekt mit der Vision, historisches Wissen auf spielerische Weise zu teilen!</div>     

          <div className="howitworks-step-subtitle">Wenn Ihnen unsere Arbeit gefällt, können Sie uns mit einer Spende unterstützen.</div>
          <div className="howitworks-step-subtitle">Das hier gesammelte Geld wird verwendet, um neue historische Erlebnisse im Stil der Schatzsuche zu erhalten und zu schaffen.</div>
        
          <div className="button-paypal">
            <a href="https://www.paypal.com/donate?hosted_button_id=R4TQEK62Z6GDU" target="_blank" rel="noopener noreferrer">
            <div className="donate-button">Spenden</div>
            </a> 
          </div>
            
          <div className="howitworks-step-subtitle">Sie können uns auch mit Ihrem Feedback unterstützen und indem Sie unseren Social-Media-Kanälen folgen oder uns ein Like geben:</div>
          <div className="social-section support-socials">
              <div className="social">
                <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=7d82dcd485" target="_blank" rel="noopener noreferrer">
                <img src={feedbackicon} className="home-howitworks-image" alt="feedbackicon" style={{ height: 50, width: 50 }}/>
                </a> 
              </div>
              <div className="social fac">
                <SocialIcon className="icon" url="https://www.facebook.com/Ciceru-101281968669466" style={{ height: 50, width: 50 }} target="_blank" rel="noopener noreferrer"/>
              </div>  
              <div className="social">
                <SocialIcon className="icon" url="https://mobile.twitter.com/ciceru1" style={{ height: 50, width: 50 }} target="_blank" rel="noopener noreferrer"/>
              </div>
              <div className="social insta">
                <SocialIcon className="icon" url="https://www.instagram.com/ciceruinsta/" style={{ height: 50, width: 50 }} target="_blank" rel="noopener noreferrer"/>
              </div>
          </div>
        
        </div>  
        <CookieConsent 
            buttonText="Ich akzeptiere"
            declineButtonText="Ich lehne ab"
            enableDeclineButton 
            buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
            onAccept={() => {
                ReactGA.initialize('UA-192893120-1');
                ReactGA.pageview('/de/support-us');
            }}
            >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
        </CookieConsent>
        <Footer />
      </div>  
    );
  }
}

export default Support;