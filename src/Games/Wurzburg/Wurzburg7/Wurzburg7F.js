import React, { Component } from 'react';
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import GameMenu from '../../../Components/GameMenu';

class Wurzburg7F extends Component {

  render() {
      return ( 
        <div>
          {this.props.gamemenu !== true && <div>
          <Timeline timelineProgress="7" timelineReference="19th A.D."/>
          <div className="clue-background">
            <div className="clue-background-title">Well done!</div>
            <div className="clue-background-divs">
            <div className="clue-background-div">Despite the growth of the town and the new achievements of the Residence and its Garden, the age of the prince-bishops was coming to an end.</div>
            <div className="clue-background-div">Secularization finally divorced the sacred and the secular in 1803.</div>
    {/* <div>i bishops sono alla fine e (anche occupazione francese forse Napoleon)</div> */}
            </div>
          </div>
          <div className="buttons-section">
            <Link to="/wuerzburg/ringpark">
                <div className="gameNext-button">
                    Next
                </div>
            </Link>
            <Link to="/wuerzburg/residenz/garden/clueQuestion">
                <div className="gameNext-button-below">
                    Back
                </div>
            </Link>
            <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=e11c3c40f6" target="_blank" rel="noopener noreferrer">
              <div className="gameFeedback-button">Give Feedback</div>
            </a>
          </div>
          </div>}<GameMenu {...this.props}/>
        </div>  
      );
  }
}

export default Wurzburg7F;