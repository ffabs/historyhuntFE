import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import wuerzburg from '../../WurzburgImages/wuerzburg-intro.png';
import playground from '../../WurzburgImages/playground.jpeg';
import Header from '../../../../Components/ComponentsEN/Header';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';
import Footer from '../../../../Components/ComponentsEN/Footer';
import {Link} from 'react-router-dom';
import './Wurzburg0.css';
// import girlwalking from '../../../Images/girlwalking.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg0');
}

class Wurzburg0 extends Component {
    constructor() {
        super();
        this.state = {
            languageCSS: "hide",
        };
    }
  
    showHideLanguages = event => {
      let newLanguageCss;
      if (this.state.languageCSS === "hide") {
          newLanguageCss = "game-newlanguagecss";
      } else {
          newLanguageCss = "hide";
      }
      this.setState({
          languageCSS: newLanguageCss
      });
    }
    
    render() {
        return ( 
            <div>
                <div className="header-footer"><Header page={'Game'}/></div>
            
                <div className="game-page">
                    
                <div className="game-desktop">
                    Please use your phone to enjoy the best game experience!
                </div>
                {/* <img src={girlwalking} className="home-howitworks-image" alt="girlwalking" /> */}
                <div className="game-page-border">
                {this.props.gamemenu !== true && 
                <div> 
                    <div className="gameIntro">
                    
                    <div onClick={this.showHideLanguages} className="game-language-switcher">
                        <div onClick={this.showHideLanguages}>
                            <div className="game-language-selector">🇬🇧 English version ▾</div>
                        </div>
                        <div className={this.state.languageCSS} onClick={this.showHideLanguages}>
                            {/* <Link to='/wuerzburg'> 
                                <div className="game-language-options language-option-nav current">🇬🇧 English version ✔️</div>
                            </Link> */}
                            <Link to={"/DE/wuerzburg"}> 
                                <div className="game-language-options">🇩🇪 Deutsche Version</div>
                            </Link>    
                        </div> 
                    </div>

                    <div className="gameIntro-title">
                        <div>A journey through time</div>
                        <div>in Würzburg</div>
                    </div>
                    <img src={wuerzburg} className="gameIntro-image" alt="wuerzburg" />
                    <div className="gameIntro-details">
                        <div className="gameIntro-detail">
                            <div className="gameIntro-detail-icon">🔎</div>
                            <div className="gameIntro-detail-text">11 clues</div>
                        </div>
                        <div className="gameIntro-detail">
                            <div className="gameIntro-detail-icon">🚶</div>
                            <div className="gameIntro-detail-text">6.0 km</div>
                        </div>
                        <div className="gameIntro-detail">
                            <div className="gameIntro-detail-icon">⏱️</div>
                            <div className="gameIntro-detail-text">2.5 h</div>
                        </div>
                    </div>
                    <Link to="/wuerzburg/start">
                        <div className="gameIntro-button">
                            Start the journey
                        </div>
                    </Link>
                    
                    <div className="gameIntro-detail">The playground is the city center!</div>

                    <img src={playground} className="gameIntro-image" alt="wuerzburg-playground" />
                    
                    {/* <iframe 
                        className="clue-map"
                        title="map"
                        // frameborder="0" 
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed/v1/view?zoom=15&center=49.7933,9.9326&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
                        // allowfullscreen 
                    /> */}
                    <Link to="/wuerzburg/start">
                        <div className="additional-margins gameIntro-button">
                            Start the journey
                        </div>
                    </Link>
                </div>  
                </div>}
                <GameMenu {...this.props}/>
                </div>
                </div>
                <CookieConsent 
                    enableDeclineButton 
                    buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                    onAccept={() => {
                        ReactGA.initialize('UA-192893120-1');
                        ReactGA.pageview('/wurzburg0');
                    }}
                    >This website uses Google Analytics cookies to enhance the user experience.
                </CookieConsent>
                <div className="header-footer"><Footer /></div>
            </div>
        );
    }
}

export default Wurzburg0;
