import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg5A() {
  return ( 
    <div>
      <Timeline timelineProgress="25" timelineReference="16th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Julius Echter</div>
        <div className="clue-background-div">Meet julius echter von mespelbrunn</div>
        <div className="clue-background-div">(QWWJ+V8 Würzburg), </div>
        <div className="clue-background-div">...arrived?</div>
        <Link to="/wuerzburg/julius/statue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg5A;