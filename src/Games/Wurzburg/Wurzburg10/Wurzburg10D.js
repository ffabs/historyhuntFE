import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg10D() {
  return ( 
    <div>
      <Timeline timelineProgress="30" timelineReference="20th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">Only one left</div>
        <div className="clue-background-div">...ready?</div>
        <Link to="/wuerzburg/currenttimes">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg10D;