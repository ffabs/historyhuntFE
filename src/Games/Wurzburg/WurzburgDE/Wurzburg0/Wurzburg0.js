import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import wuerzburg from '../../WurzburgImages/wuerzburg-intro.png';
import playground from '../../WurzburgImages/playground.jpeg';
import Header from '../../../../Components/ComponentsDE/Header';
import GameMenu from '../../../../Components/ComponentsDE/GameMenu';
import Footer from '../../../../Components/ComponentsDE/Footer';
import {Link} from 'react-router-dom';
import './Wurzburg0.css';
// import girlwalking from '../../../Images/girlwalking.png';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/DE/wurzburg0');
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
          newLanguageCss = "";
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
                Bitte benutzen Sie Ihr Handy, um das beste Spielerlebnis zu genießen!
                </div>
                {/* <img src={girlwalking} className="home-howitworks-image" alt="girlwalking" /> */}
                <div className="game-page-border">
                {this.props.gamemenu !== true && 
                <div> 
                    <div className="gameIntro">

                    <div onClick={this.showHideLanguages} className="game-language-switcher">
                        <div onClick={this.showHideLanguages}>
                            <div className="game-language-selector">🇩🇪 Deutsche Version ▾</div>
                        </div>
                        <div className={this.state.languageCSS} onClick={this.showHideLanguages}>
                            <Link to='/wuerzburg'> 
                                <div className="game-language-options-uk">🇬🇧 English version</div>
                            </Link>
                            {/* <Link to={"/DE/wuerzburg"}> 
                                <div className="game-language-options-de game-language-options language-option-nav">🇩🇪 Deutsche Version ✔️</div>
                            </Link>     */}
                        </div> 
                    </div>

                    <div className="gameIntro-title">
                        <div>Eine Reise durch die Zeit</div>
                        <div>in Würzburg</div>
                    </div>
                    <img src={wuerzburg} className="gameIntro-image" alt="wuerzburg" />
                    <div className="gameIntro-details">
                        <div className="gameIntro-detail">
                            <div className="gameIntro-detail-icon">🔎</div>
                            <div className="gameIntro-detail-text">11 hinweise</div>
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
                    <Link to="/DE/wuerzburg/start">
                        <div className="gameIntro-button">
                            Beginnen Sie die Reise
                        </div>
                    </Link>
                    
                    <div className="gameIntro-detail">Der Spielplatz ist das Stadtzentrum!</div>

                    <img src={playground} className="gameIntro-image" alt="wuerzburg-playground" />

                    <Link to="/DE/wuerzburg/start">
                        <div className="additional-margins gameIntro-button">
                            Beginnen Sie die Reise
                        </div>
                    </Link>
                </div>  
                </div>}
                <GameMenu {...this.props}/>
                </div>
                </div>
                <CookieConsent 
                    buttonText="Ich akzeptiere"
                    declineButtonText="Ich lehne ab"
                    enableDeclineButton 
                    buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                    onAccept={() => {
                        ReactGA.initialize('UA-192893120-1');
                        ReactGA.pageview('/DE/wurzburg0');
                    }}
                    >Diese Website verwendet Google Analytics-Cookies, um die Nutzererfahrung zu verbessern.
                </CookieConsent>
                <div className="header-footer"><Footer /></div>
            </div>
        );
    }
}

export default Wurzburg0;
