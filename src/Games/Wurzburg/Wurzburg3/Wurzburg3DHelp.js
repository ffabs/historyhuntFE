import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';
import tree from '../WurzburgImages/tree.png';

class Wurzburg2DHelp extends Component {
    
  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && 
          <div> 
          <Timeline timelineProgress="4" timelineReference="12-14th A.D."/>
            <div className="clue-background">
            <div className="clue-background-title">Clue Help</div>
            <div className="clue-background-div">As written at the bottom of the tree, it was repainted at the beginning of the 20th century:</div>
            <div>
              <img src={tree} className="tree-image" alt="tree" />
            </div>
          </div>
        <div className="buttons-section">
            <Link to="/wuerzburg/citycouncil/sundial/clue">
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

export default Wurzburg2DHelp;