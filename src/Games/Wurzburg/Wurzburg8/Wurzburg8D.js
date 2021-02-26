import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg8D() {
  return ( 
    <div>
      <Timeline timelineProgress="7" timelineReference="19th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">This answer also explains why the park is called "Ring", having a round shape all around the city, like the city walls used to!</div>
      </div>
      <div className="question-section">
        <div className="clue-background-div">Let's find out some of its other secrets...</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/xrays">
            <div className="gameNext-button">
                Next
            </div>
        </Link>
        <Link to="/wuerzburg/ringpark/intro/clue">
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

export default Wurzburg8D;