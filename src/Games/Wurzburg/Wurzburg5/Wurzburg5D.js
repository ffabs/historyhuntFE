import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg5D() {
  return ( 
    <div>
      <Timeline timelineProgress="5" timelineReference="16th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">In addition to the Juliusspital, he erected the old university, multiple churches and schools and he also extended the fortress, renovating and improving it after a fire had damaged it.</div>
        <div className="clue-background-div">He was probably not expecting that the bishops of the following centuries would have left the fortress...</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/residenz">
            <div className="gameNext-button">
                Next Clue
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