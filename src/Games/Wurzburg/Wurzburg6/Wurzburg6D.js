import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg6D() {
  return ( 
    <div>
      <Timeline timelineProgress="6" timelineReference="17th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
      </div>
      <div className="buttons-section">
        <div className="clue-background-div">...next clue?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/residenz">
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

export default Wurzburg6D;