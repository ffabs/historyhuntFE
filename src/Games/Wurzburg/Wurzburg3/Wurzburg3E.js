import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg3E() {
  return ( 
    <div>
      <Timeline timelineProgress="4" timelineReference="12-14th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">Despite the presence of the town hall, the city was still fully under control of the prince-bishops.</div>
        <div className="clue-background-div">The citizens revolted multiple times and in 1400 they suffered a major defeat. However, the contrasts between the bishops and the citizens were not over yet...</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/peasants">
          <div className="gameNext-button">
              Next Clue
          </div>
        </Link>
        <Link to="/wuerzburg/citycouncil/sundial/clue">
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

export default Wurzburg3E;