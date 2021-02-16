import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg9D() {
  return ( 
    <div>
      <Timeline timelineProgress="8" timelineReference="19-20th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
      </div>
      <div className="question-section">
        <div className="clue-background-div">What happened next?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/worldwar">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
        <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=e11c3c40f6" target="_blank" rel="noopener noreferrer">
          <div className="gameFeedback-button">Give Feedback</div>
        </a>
      </div>
    </div>  
  );
}

export default Wurzburg9D;