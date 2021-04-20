
import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg6D() {
  return ( 
    <div>
      <Timeline timelineProgress="6" timelineReference="17. Jh. n.Chr."/>
      <div className="clue-background">
        <div className="clue-background-title">Gut gemacht!</div>
      </div>
      <div className="buttons-section">
        <div className="clue-background-div">...nächster Hinweis?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/residenz">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg6D;