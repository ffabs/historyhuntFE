import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import Header from '../../Components/ComponentsEN/Header';
import Footer from '../../Components/ComponentsEN/Footer';
import homeBackground from '../../Images/home-background.png';
import residenzBackground from '../../Images/residenzBackground.png';
import '../../App.css';
import '../Games.css';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/games');
}

class Games extends Component {

    render() {
        return ( 
            <div>
                <div className="home">
                    <Header page={'Games'}/>   
                    <div className="section-title">Choose your historical treasure hunt experience!</div>
                    <div className="games">   
                        <HashLink to="/wuerzburg-origins/#game" className="zoom game-overview">
                            <div className="game-text">
                                <div className="game-location">Play in Würzburg</div>
                                <div>A historical journey from the city foundation until the 16th century</div>
                                <div className="game-title game-title-top">THE ORIGINS</div>
                                <div className="game-title game-title-buttom">OF WÜRZBURG</div>
                                
                                <div>Approx. 2 hours</div>
                                <div>Languages: 🇬🇧 🇩🇪</div>
                                <div>Available every day</div>
                                <div className="home-background-form">
                                    <div className="home-background-button">
                                        Read more
                                    </div>
                                </div>
                                <div className="game-price">Free - Limited offer!</div>
                            </div>
                            <img src={homeBackground} className="game-background-image" alt="wuerzburg" />
                        </HashLink>
                        <Link to="/wuerzburg" className="zoom game-overview"> 
                            <div className="game-text">
                                <div className="game-location">Play in Würzburg</div>
                                <div>A historical journey from the 17th century until the current times</div>
                                <div className="game-title game-title-top">WÜRZBURG BECOMING</div>
                                <div className="game-title game-title-buttom">A MODERN CITY</div>
                                <div>Approx. 2 hours</div>
                                <div>Languages: 🇬🇧 🇩🇪</div>
                                <div>Available every day</div>
                                <div className="home-background-form">
                                    <div className="home-background-button">
                                        Read more
                                    </div>
                                </div>
                                <div className="game-price">Free - Limited offer!</div>
                            </div>
                            <img src={residenzBackground} className="game-background-image" alt="wuerzburg" />
                        </Link>
                    </div>
                </div>
                <CookieConsent 
                    enableDeclineButton 
                    buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                    onAccept={() => {
                        ReactGA.initialize('UA-192893120-1');
                        ReactGA.pageview('/games');
                    }}
                    >This website uses Google Analytics cookies to enhance the user experience.
                </CookieConsent>
                <Footer />
            </div>
        );
    }
}

export default Games;
