import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg1D() {
  return ( 
    <div>
      <Timeline timelineProgress="2" timelineReference="8th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">The three are also called apostles of Franconia and their subsequent veneration leaded to the quick development of the city.</div>
        <div className="clue-background-div">So, at the beginning of the 8th century, the bishop of Würzburg was founded. In the same century, the first mention of wine got cultivated in the town and the first cathedral was build: Dom St. Kilian.</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/kilianus/dom">
          <div className="gameNext-button">
              Next Clue
          </div>
        </Link>
        <Link to="/wuerzburg/bridge/clue">
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

export default Wurzburg1D;
