import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg1B() {
  return ( 
    <div>
      <Timeline timelineProgress="1" timelineReference="7th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">A martyrdom that changed history</div>
        <div className="clue-background-div">At the end of the 7th century, three Irish missionaries brought Christianity to the region. Even if this mission got them killed, they succeed eventually.</div>
        <div className="clue-background-div">The three saints are still commemorated on this very bridge today, each with a statue among the 12 present here.</div>
      </div>
      <div className="question-section">
          <div className="clue-background-div">Are you ready to find them?</div>
      </div>
      <div className="buttons-section">
          <Link to="/wuerzburg/bridge/clue">
              <div className="gameNext-button">
                  Yes
              </div>
          </Link>
      </div>
    </div>  
  );
}

export default Wurzburg1B;
