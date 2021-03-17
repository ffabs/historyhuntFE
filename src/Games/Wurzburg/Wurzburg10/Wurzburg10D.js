import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg10D() {
  return ( 
    <div>
      <Timeline timelineProgress="9" timelineReference="20th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-divs">
        <div className="clue-background-div">Today this is still a memorial for the fallen soldiers but it is considered as a memorial for peace and not for war or heroes.</div>
      {/* </div>
      <div className="question-section"> */}
        <div className="clue-background-div question-section">Are you ready to come back to the current times?</div>
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
        <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=e11c3c40f6" target="_blank" rel="noopener noreferrer">
          <div className="gameFeedback-button">Give Feedback</div>
        </a>
      </div>
    </div>  
  );
}

export default Wurzburg10D;