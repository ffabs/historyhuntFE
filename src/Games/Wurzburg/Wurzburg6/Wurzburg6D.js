import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg6D() {
  return ( 
    <div>
      <Timeline timelineProgress="26" timelineReference="17th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">...next clue?</div>
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