import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
// import wuerzburg from '../../WurzburgImages/wuerzburg-intro.png';
import wuerzburg from '../../../../Images/home-background.png';
import ticket from '../../../../Images/ticket.png';
import location from '../../../../Images/location.png';
import play from '../../../../Images/play.png';
import game1screen0 from '../../WurzburgImages/game1screen0.png';
// import game1screen1 from '../../WurzburgImages/game1screen1.png';
// import game1screen2 from '../../WurzburgImages/game1screen2.png';
import Header from '../../../../Components/ComponentsEN/Header';
import Footer from '../../../../Components/ComponentsEN/Footer';
import statues from '../../WurzburgImages/statues.png';
import king from '../../WurzburgImages/king.png';
import treedesign from '../../WurzburgImages/treedesign.png';
import statua from '../../WurzburgImages/statua.png';
import {Link} from 'react-router-dom';
import './Wurzburg1Overview.css';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg-origins');
}

class Wurzburg1Overview extends Component {
    
    render() {
        return ( 
            <div>
                <div><Header page={'Game'}/></div>    
                <div id="game" className="game-overview-page">
                    <div className="gameoverview-title">THE ORIGINS OF WÜRZBURG</div>
                    <div className="gameoverview-desc">A historical journey from the city foundation until the 16th century</div>
                    {/* <div className="gameoverview-desc">This historical treasure hunt will make you discover the main events of the history of Würzburg, from its foundation until the 16th century.</div> */}
                    <img src={wuerzburg} className="gameoverview-coverimage" alt="wuerzburg" />
                     
                    <div className="gameoverview-titlesection">Game Overview</div>
                    <div className="gameoverview-images">
                        <img src={game1screen0} className="gameoverview-image" alt="wuerzburg-playground" />
                        <div className="gaveoverview-details">
                            <div>📍 <b>Start - End:</b> <a href="https://g.page/Stadtfuehrungen-HerrKarl?share" target="_blank" rel="noopener noreferrer">Old Main Bridge</a> - <a href="https://goo.gl/maps/yknFKJXvMaYqG8Wm8" target="_blank" rel="noopener noreferrer">Juliusspital</a></div>
                            <div>⏱️ <b>Average Duration:</b> 2 hours</div>
                            <div>🚶 <b>Average Route:</b> 4 km</div>
                            <div>🔎 <b>Number of Challenges:</b> 8 clues</div>
                            <div>🌐 <b>Available Languages:</b> 🇬🇧 English, 🇩🇪 German</div>
                            <div>📅 <b>Schedule:</b> Everyday and at any time</div>
                        </div>
                        {/* <img src={game1screen1} className="gameoverview-image" alt="wuerzburg-playground" />
                        <img src={game1screen2} className="gameoverview-image" alt="wuerzburg-playground" /> */}
                    </div>
                    
                    <div className="gameoverview-titlesection">Historical Journey</div>
                    <div className="gameoverview-journey-main">
                        <img src={statues} className="game-images" alt="wuerzburg"/>
                        <div className="gameoverview-journey">Travel back in time and start this journey back in the 7th century</div>
                        <img src={treedesign} className="game-images" alt="wuerzburg"/>
                        <div className="gameoverview-journey">Discover the main historical events that happened in Würzburg</div>
                        <img src={king} className="game-images" alt="wuerzburg"/>
                        <div className="gameoverview-journey">As well as its most famous protagonists</div>
                        <img src={statua} className="game-images" alt="wuerzburg" />
                        <div className="gameoverview-journey">Finish the game reaching the 16th century successfully!</div>
                    </div>
                    
                    <div className="gameoverview-titlesection">How to start?</div>
                    <div className="gameoverview-how">
                        <div className="gameoverview-how-sec">
                            <img src={ticket} className="gameoverview-image-how" alt="wuerzburg-playground" />
                            <div>Get a ticket (each ticket is valid for 6 months)</div>  
                        </div> 
                        <div className="gameoverview-how-sec">
                            <img src={location} className="gameoverview-image-how" alt="wuerzburg-playground" />
                            <div>Go to the starting location, the <a href="https://g.page/Stadtfuehrungen-HerrKarl?share" target="_blank" rel="noopener noreferrer">Old Main Bridge</a></div>  
                        </div>
                        <div className="gameoverview-how-sec">
                            <img src={play} className="gameoverview-image-how" alt="wuerzburg-playground" />
                            <div>Start playing and discover the local history!</div>  
                        </div>
                    </div>
                    
              

                    {/* <div>Age? (e.g. from 14 years old)</div>
                    <div>Reviews/Quotes?</div> */}

                    <div className="ticket-call">
                        <Link to="/wuerzburg/start">
                            <div className="home-background-button">
                                Get a ticket (Free!)
                            </div>
                        </Link>
                    </div>
                    <div className="gameoverview-question">Do you have any question?</div>
                    <div><a href="mailto:hi.ciceru@gmail.com" rel="noopener noreferrer">Contact us</a></div>

                    
                </div>
                <CookieConsent 
                    enableDeclineButton 
                    buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
                    onAccept={() => {
                        ReactGA.initialize('UA-192893120-1');
                        ReactGA.pageview('/wurzburg-origins');
                    }}
                    >This website uses Google Analytics cookies to enhance the user experience.
                </CookieConsent>
                <div><Footer /></div>
            </div>
        );
    }
}

export default Wurzburg1Overview;
