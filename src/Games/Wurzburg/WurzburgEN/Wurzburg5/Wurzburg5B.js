import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import uni from '../../WurzburgImages/uni.svg.png';
import statua from '../../WurzburgImages/statua.png';
import GameMenu from '../../../../Components/ComponentsEN/GameMenu';

let consent = getCookieConsentValue();
if (consent === "true") {
    ReactGA.initialize('UA-192893120-1');
    ReactGA.pageview('/wurzburg5B');
}

class Wurzburg5B extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div> 
          <Timeline timelineProgress="5" timelineReference="16th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Julius Echter</div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Julius Echter was a strong representative of the Counter Reformation, bringing Catholicism back in the diocese of Würzburg and expelling the Protestants.</div>
            </div>
            <img src={statua} className="uni" alt="statua"/>
            <div className="clue-background-divs">
            <div className="clue-background-div">In addition, he is known for having renewed the state legal system, led the diocese out of debt without taxes and re-established the university, which still holds his name today!</div>
            </div>
            <img src={uni} className="uni" alt="uni" />
            <div className="clue-background-divs">
            <div className="clue-background-div">However, he is not remembered only as an important administrative reformer but also as a great builder. One example is the building at the other side of the street that also takes his name: the Juliusspital.</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/julius/statue/clue">
                <div className="gameNext-button">
                    Next
                </div>
            </Link>
            <Link to="/wuerzburg/julius">
                <div className="gameNext-button-below">
                    Back
                </div>
            </Link>
          </div>
          </div>}<GameMenu {...this.props}/> 
          <CookieConsent 
              enableDeclineButton 
              buttonStyle={{ background: "#00695c", color: "white", fontWeight: "bold" }}
              onAccept={() => {
                  ReactGA.initialize('UA-192893120-1');
                  ReactGA.pageview('/wurzburg5B');
              }}
              >This website uses Google Analytics cookies to enhance the user experience.
          </CookieConsent>
        </div>  
      );
  }
}

export default Wurzburg5B;