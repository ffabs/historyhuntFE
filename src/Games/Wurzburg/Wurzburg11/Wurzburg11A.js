import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg11A() {
  return ( 
    <div>
      <Timeline timelineProgress="31" timelineReference="21th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Current times</div>
        <div className="clue-background-div">Just move to the fontain</div>
        <div className="clue-background-div">(QWWJ+V8 Würzburg), </div>
        <div className="clue-background-div">...arrived?</div>
        <Link to="/wuerzburg/currenttimes/intro">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg11A;