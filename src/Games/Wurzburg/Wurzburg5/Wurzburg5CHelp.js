import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import juliushelp from '../WurzburgImages/juliushelp.png';
import juliusbar from '../WurzburgImages/juliusbar.png';

class Wurzburg4CHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="5" timelineReference="16th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">There are 3 correct answers: a clinic, a winery and also a backery!</div>
            <div>
              <img src={juliushelp} className="memorial-image" alt="juliushelp" />
              <img src={juliusbar} className="memorial-image" alt="juliusbar" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/wuerzburg/julius/statue/clue">
                <div className="gameNext-button">
                    Back
                </div>
            </Link>
          </div>
          </div>}<GameMenu {...this.props}/> 
        </div>  
      );
  }
}

export default Wurzburg4CHelp;