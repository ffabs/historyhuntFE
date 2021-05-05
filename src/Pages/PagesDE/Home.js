import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Header from '../../Components/ComponentsDE/Header';
import Footer from '../../Components/ComponentsDE/Footer';
import '../../App.css';
import '../Home.css';
import '../Pages.css';
import homeBackground from '../../Images/home-background.png';
import {Link} from 'react-router-dom';
import phonedirection from '../../Images/phonedirection.png';
import guywalking from '../../Images/guywalking.png';
import fontain from '../../Images/fontain.png';
import girlhappy from '../../Images/girlhappy.png';
import group from '../../Images/group.png';
import guyhappy from '../../Images/guyhappy.png';
import peasant from '../../Images/peasant.png';
import statua from '../../Images/statua.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/de/home');
} 

class Home extends Component {

  render() {    
    return ( 
      <div className="home">
        <Header page={'Home'}/>
        <div className="home-background">
          <div className="home-background-text">
            <div>DIE SCHATZSUCHE</div>
            <div>UM DIE GESCHICHTE WÜRZBURGS</div>
            <div>ZU ENTDECKEN</div>
          </div>
          <div className="home-background-support-text">
            <div>EIN KOSTENLOSES REAL WORLD HISTORY GAME,</div>
            <div>GEFÜHRT VON IHREM SMARTPHONE</div>
            <div>ZU SPIELEN IN WÜRZBURG, DEUTSCHLAND</div>
            <div className="home-background-form">
              <Link to="/DE/wuerzburg">
                  <div className="home-background-button">
                    Jetzt Spielen
                  </div>
              </Link>
            </div>
          </div>
          <img src={homeBackground} className="home-background-image" alt="wuerzburg" />
        </div>
        <div id="how" className="sections-howitworks">
          <div className="section-title">So funktioniert's</div>
          <div className="section-howitworks-background">
            <div className="howitworks-step-title">Step 1</div>
            <div className="howitworks-step-elements">
              <div><img src={group} className="home-howitworks-image" alt="wuerzburg" /></div>
              <div>
                <div className="howitworks-step-subtitle">Komm nach Würzburg</div>
                <div className="howitworks-step-text">Sie müssen selbst in der Stadt sein, um ihre alte Geschichte wirklich zu entdecken!</div>
              </div>
              <div><img src={fontain} className="home-howitworks-image" alt="wuerzburg" /></div>
            </div>
          </div>

          <div className="section-howitworks-background">
            <div className="howitworks-step-title">Step 2</div>
            <div className="howitworks-step-elements">
              {/* <img src={annouce} className="home-howitworks-image" alt="wuerzburg" /> */}
              <img src={peasant} className="home-howitworks-image" alt="wuerzburg" />
              <div>
                <div className="howitworks-step-subtitle">Starte das Spiel</div>
                <div className="howitworks-step-text">Reisen Sie in die Vergangenheit und verfolgen Sie die Zeitachse dieser Stadt!</div>
              </div>
              <img src={statua} className="home-howitworks-image" alt="wuerzburg" />
            </div>
          </div>

          <div className="section-howitworks-background">
            <div className="howitworks-step-title">Step 3</div>
            <div className="howitworks-step-elements">
              <img src={guywalking} className="home-howitworks-image" alt="wuerzburg" />
              <div>
                <div className="howitworks-step-subtitle">Folge dem Pfad</div>
                <div className="howitworks-step-text">Das Spiel zeigt Ihnen den Weg zu den historischen Sehenswürdigkeiten.</div>
              </div>
              <img src={phonedirection} className="home-howitworks-image" alt="wuerzburg" />
            </div>
          </div>

          <div className="section-howitworks-background">
            <div className="howitworks-step-title">Step 4</div>
            <div className="howitworks-step-elements">
              <img src={guyhappy} className="home-howitworks-image" alt="wuerzburg" />
              <div>
                <div className="howitworks-step-subtitle">Löse die Hinweise</div>
                <div className="howitworks-step-text">Jeder Ort fordert Sie auf, seine Geschichte zu entdecken. Finden Sie die richtigen Antworten und schalten Sie die nächsten Schritte frei!</div>
              </div>
              <img src={girlhappy} className="home-howitworks-image" alt="wuerzburg" />
            </div>
          </div>
          
          <div className="home-background-form">
            <Link to="/DE/wuerzburg">
                <div className="home-background-button button-end">
                  Jetzt Spielen
                </div>
            </Link>
          </div>
        </div>
        <CookieConsent 
            buttonText="Ich akzeptiere"
            declineButtonText="Ich lehne ab"
            enableDeclineButton 
            buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
            onAccept={() => {
                ReactGA.initialize('UA-192893120-1');
                ReactGA.pageview('/de/home');
            }}
            >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
        </CookieConsent>
        <Footer />
      </div>  
    );
  }
}

export default Home;