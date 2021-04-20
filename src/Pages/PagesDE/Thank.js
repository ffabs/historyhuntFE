import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Header from '../../Components/ComponentsDE/Header';
import Footer from '../../Components/ComponentsDE/Footer';
import '../../App.css';
import './Home.css';
import './Pages.css';
import { SocialIcon } from 'react-social-icons';
import feedbackicon from '../../Images/feedbackicon.png';
import annouce from '../../Images/annouce.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/de/thank-you');
}

class Thank extends Component {

  render() {
    return ( 
      <div className="home">
        <Header page={'Support'}/>
        <div className="support-page"> 
          <div className="section-title">
            Danke für Ihre Unterstützung!!
          </div>
          <div className="howitworks-step-subtitle thankyoupage">Vielen Dank, dass Sie uns dabei helfen, neue historische Erlebnisse im Stil der Schatzsuche zu pflegen und zu schaffen.</div>
          <img src={annouce} className="home-howitworks-image thankyoupage" alt="annouce" />
          <div className="howitworks-step-subtitle thankyoupage-more">Wir sehen uns im nächsten Abenteuer!</div>
          <div className="howitworks-step-subtitle ">Übrigens, wenn Sie Ciceru weiter unterstützen möchten, vergessen Sie nicht, Ihr Feedback zu teilen und unsere Social-Media-Konten zu mögen!</div>
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
                ReactGA.pageview('/de/thank-you');
            }}
            >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
        </CookieConsent>
        <Footer />
      </div>  
    );
  }
}

export default Thank;