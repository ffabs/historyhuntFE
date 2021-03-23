import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import warriors from '../WurzburgImages/warriors.png';
import crosses from '../WurzburgImages/crosses.png';
import planewar from '../WurzburgImages/planewar.png';

class Wurzburg10D extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="9" timelineReference="20th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Well done!</div>
            <div className="war-memorial">
              <img src={warriors} className="warriors" alt="warriors" />
              <img src={crosses} className="crosses" alt="crosses" />
            </div>
            <div className="clue-background-divs">
              <div className="clue-background-div">Today this is still a memorial for the fallen soldiers but it is considered as a memorial for peace and not for war or heroes.</div>
            </div>         
            <img src={planewar} className="oegg" alt="planewar" />
            <div className="clue-background-divs">
              <div className="clue-background-div question-section">Are you ready to fly back to the current times?</div>
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/currenttimes/intro">
                <div className="gameNext-button">
                    Yes
                </div>
            </Link>
            <Link to="/wuerzburg/worldwar/intro/clue">
                <div className="gameNext-button-below">
                    Back
                </div>
            </Link>
          </div>
          </div>}<GameMenu {...this.props}/>
        </div>  
      );
  }
}

export default Wurzburg10D;