import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg9A() {
  return ( 
    <div>
      <Timeline timelineProgress="29" timelineReference="19th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">X Rays</div>
        <div className="clue-background-div">Get to know a scientist</div>
        <div className="clue-background-div">(QWWJ+V8 Würzburg), </div>
        <div className="clue-background-div">...arrived?</div>
        <Link to="/wuerzburg/xrays/intro">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg9A;