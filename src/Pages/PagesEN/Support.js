import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Header from '../../Components/ComponentsEN/Header';
import Footer from '../../Components/ComponentsEN/Footer';
import '../../App.css';
import '../Pages.css';
import { SocialIcon } from 'react-social-icons';
import flying from '../../Images/flying.png';
import feedbackicon from '../../Images/feedbackicon.png';
// import annouce from '../Images/annouce.png';
// import coins from '../Images/coins.png';
// import boat from '../Images/boat.png';
// import groupstars from '../Images/groupstars.png';
// import musician from '../Images/musician.png';
// import torches from '../Images/torches.png';
// import torch1 from '../Images/torch1.png';
// import torch from '../Images/torch.png';
// import starguy from '../Images/starguy.png';
// import stargirl from '../Images/stargirl.png';
// import reviewing from '../Images/reviewing.png';
let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/support-us');
}

class Support extends Component {

  render() { 
    return ( 
      <div className="home">
        <Header page={'Support'}/> 
        <div className="support-page">     
          <div className="section-title">Thank you for your interest in supporting us!</div>
          <img src={flying} className="home-howitworks-image" alt="flying" />
          
          <div className="howitworks-step-subtitle">Ciceru is an independent self-funded project with the vision of sharing historical knowledge in a fun way!</div>
          {/* <img src={annouce} className="home-howitworks-image" alt="announcement" /> */}
          

          <div className="howitworks-step-subtitle">If you like what we do, you can support us with a tip.</div>
          <div className="howitworks-step-subtitle">The money raised here are used to maintain and create new historical treasure hunt-style experiences.</div>
          
          {/* <div className="howitworks-step-subtitle">Help us to maintain this project and create new ones in other cities!</div> */}
          
          {/* <div className="howitworks-step-subtitle">If you want to support what we do...</div> */}
          {/* <div className="howitworks-step-subtitle">If you want to support this jouney...</div> */}
            {/* <img src={boat} className="home-howitworks-image" alt="boat" /> */}
            {/* <div className="button-paypal">
              <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="P3BFTNB5M6JGE" />
                <input type="image" src="https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" width="200"/>
                <img alt="" border="0" src="https://www.paypal.com/en_DE/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </div> */}

            <div className="button-paypal">
              <a href="https://www.paypal.com/donate?hosted_button_id=P3BFTNB5M6JGE&source=url" target="_blank" rel="noopener noreferrer">
              <div className="donate-button">Donate</div>
              </a> 
            </div>
            

            {/* <img src={torches} className="home-howitworks-image" alt="torches" />
            <img src={musician} className="home-howitworks-image" alt="musician" />
            <img src={torch1} className="home-howitworks-image" alt="torch1" />
            <img src={torch} className="home-howitworks-image" alt="torch" /> */}

            

          
          {/* <img src={groupstars} className="home-howitworks-image" alt="groupstars" /> */}
          <div className="howitworks-step-subtitle">You can also support us with your feedback and by liking / following our social media accounts:</div>
          <div className="social-section support-socials">
              <div className="social">
                <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=e11c3c40f6" target="_blank" rel="noopener noreferrer">
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
          {/* <img src={starguy} className="home-howitworks-image" alt="starguy" />
          <img src={stargirl} className="home-howitworks-image" alt="stargirl" /> */}
          {/* <div className="howitworks-step-subtitle">Finally, do you have any feedback for us? We are interested in your thoughts!</div> */}
          {/* <img src={reviewing} className="home-howitworks-image" alt="reviewing" /> */}
        </div>  
        <CookieConsent 
            enableDeclineButton 
            buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
            onAccept={() => {
                ReactGA.initialize('UA-192893120-1');
                ReactGA.pageview('/support-us');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>
        <Footer />
      </div>  
    );
  }
}

export default Support;