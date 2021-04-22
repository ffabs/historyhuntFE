import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Header from '../../Components/ComponentsEN/Header';
import Footer from '../../Components/ComponentsEN/Footer';
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
// import girlhappy2 from '../Images/girlhappy2.png';
// import archer from '../Images/archer.png';
// import bishop from '../Images/bishop.png';
// import firework from '../Images/firework.png';
// import hist from '../Images/hist.png';
// import histsmart from '../Images/histsmart.png';
// import histsoldier from '../Images/histsoldier.png';
// import king from '../Images/king.png';
// import kingchill from '../Images/kingchill.png';
// import soldierready from '../Images/soldierready.png';
// import soldierstand from '../Images/soldierstand.png';
// import teatr from '../Images/teatr.png';
// import guard from '../Images/guard.png';
// import kingish from '../Images/kingish.png';
// import lady from '../Images/lady.png';
// import jolly from '../Images/jolly.png';
// import histmosch from '../Images/histmosch.png';
// import histperson from '../Images/histperson.png';
// import castle from '../Images/castle.png';
// import perla from '../Images/perla.png';
// import statue from '../Images/statue.png';
// import worldwar from '../Images/worldwar.png';
let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/home');
} 

class Home extends Component {

  render() {    
    return ( 
      <div className="home">
        <Header page={'Home'}/>
        <div className="home-background">
          <div className="home-background-text">
            <div>A TREASURE HUNT-STYLE EXPERIENCE</div>
            <div>TO DISCOVER THE HISTORY</div>
            <div>OF WÜRZBURG</div>
          </div>
          <div className="home-background-support-text">
            <div>A FREE REAL WORLD HISTORY GAME,</div>
            <div>GUIDED BY YOUR PHONE</div>
            <div>TO BE PLAYED IN WÜRZBURG, GERMANY</div>
            <div className="home-background-form">
              <Link to="/wuerzburg">
                  <div className="home-background-button">
                      Play Now
                  </div>
              </Link>
            </div>
          </div>
          <img src={homeBackground} className="home-background-image" alt="wuerzburg" />
        </div>
        <div id="how" className="sections-howitworks">
          <div className="section-title">How it works</div>
          <div className="section-howitworks-background">
            <div className="howitworks-step-title">Step 1</div>
            <div className="howitworks-step-elements">
              <div><img src={group} className="home-howitworks-image" alt="wuerzburg" /></div>
              <div>
                <div className="howitworks-step-subtitle">Come to Würzburg</div>
                <div className="howitworks-step-text">You need to be in the city itself to really discover its ancient history!</div>
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
                <div className="howitworks-step-subtitle">Start the game</div>
                <div className="howitworks-step-text">Let yourself travel back in time, retracing the timeline of this city!</div>
              </div>
              <img src={statua} className="home-howitworks-image" alt="wuerzburg" />
            </div>
          </div>

          <div className="section-howitworks-background">
            <div className="howitworks-step-title">Step 3</div>
            <div className="howitworks-step-elements">
              <img src={guywalking} className="home-howitworks-image" alt="wuerzburg" />
              <div>
                <div className="howitworks-step-subtitle">Follow the path</div>
                <div className="howitworks-step-text">The game will show you the way to the historical points of interest.</div>
              </div>
              <img src={phonedirection} className="home-howitworks-image" alt="wuerzburg" />
            </div>
          </div>

          <div className="section-howitworks-background">
            <div className="howitworks-step-title">Step 4</div>
            <div className="howitworks-step-elements">
              <img src={guyhappy} className="home-howitworks-image" alt="wuerzburg" />
              <div>
                <div className="howitworks-step-subtitle">Solve the clues</div>
                <div className="howitworks-step-text">Each location will challenge you to discover its history. Find the right answers and unlock the next steps!</div>
              </div>
              <img src={girlhappy} className="home-howitworks-image" alt="wuerzburg" />
              {/* <img src={girlhappy2} className="home-howitworks-image" alt="wuerzburg" /> */}
            </div>
          </div>

          

          {/* <div className="section-howitworks-background">
            <div className="howitworks-step-title">Step 5</div>
            <div className="howitworks-step-elements">
              <img src={teatr} className="home-howitworks-image" alt="wuerzburg" />
              <div>
                <div className="howitworks-step-subtitle">Solve all the clues to come back to the current times</div>
                <div className="howitworks-step-text">To discover the history of Würzburg go to the city itself!</div>
              </div>
              <img src={firework} className="home-howitworks-image" alt="wuerzburg" />
            </div>
          </div> */}

          <div className="home-background-form">
            <Link to="/wuerzburg">
                <div className="home-background-button button-end">
                    Play Now
                </div>
            </Link>
          </div>
            
          {/* <div> 
            <img src={musician} className="home-howitworks-image" alt="wuerzburg" />
            <img src={archer} className="home-howitworks-image" alt="wuerzburg" />
            <img src={hist} className="home-howitworks-image" alt="wuerzburg" />
            <img src={histsmart} className="home-howitworks-image" alt="wuerzburg" />
            <img src={histsoldier} className="home-howitworks-image" alt="wuerzburg" />
          </div>
          <div>
            <img src={kingchill} className="home-howitworks-image" alt="wuerzburg" />
            <img src={bishop} className="home-howitworks-image" alt="wuerzburg" />
            <img src={king} className="home-howitworks-image" alt="wuerzburg" />
            <img src={soldierready} className="home-howitworks-image" alt="wuerzburg" />
            <img src={soldierstand} className="home-howitworks-image" alt="wuerzburg" />          
          </div> */}
          
            {/* <img src={guard} className="home-howitworks-image" alt="wuerzburg" /> */}
            {/* <div><img src={castle} className="home-howitworks-image" alt="wuerzburg" /></div> */}
            {/* <img src={statue} className="home-howitworks-image" alt="wuerzburg" /> */}
            {/* <img src={worldwar} className="home-howitworks-image" alt="wuerzburg" /> */}
            {/* <img src={kingish} className="home-howitworks-image" alt="wuerzburg" /> */}
            {/* <img src={lady} className="home-howitworks-image" alt="wuerzburg" />           */}
            {/* <img src={jolly} className="home-howitworks-image" alt="wuerzburg" /> */}
            {/* <img src={perla} className="home-howitworks-image" alt="wuerzburg" /> */}
            {/* <img src={histmosch} className="home-howitworks-image" alt="wuerzburg" /> */}
            {/* <img src={histperson} className="home-howitworks-image" alt="wuerzburg" /> */}
            {/* <img src={girlwalking} className="home-howitworks-image" alt="wuerzburg" /> */}
        </div>
        <CookieConsent 
            enableDeclineButton 
            buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
            onAccept={() => {
                ReactGA.initialize('UA-192893120-1');
                ReactGA.pageview('/home');
            }}
            >This website uses Google Analytics cookies to enhance the user experience.
        </CookieConsent>
        <Footer />
      </div>  
    );
  }
}

export default Home;