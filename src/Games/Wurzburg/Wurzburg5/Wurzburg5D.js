import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg5D() {
  return ( 
    <div>
      <Timeline timelineProgress="5" timelineReference="16th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">In addition to the Juliusspital, he erected the old university as well as multiple churches and schools.</div>
        <div className="clue-background-div">Finally, he also extended the fortress, renovating and improving it after a fire had damaged it. Probably, he did not expect that in the following centuries his successors would have stop living there...</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/residenz">
            <div className="gameNext-button">
                Next Clue
            </div>
        </Link>
        <Link to="/wuerzburg/julius/statue/clue">
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

export default Wurzburg5D;