import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg8B() {
  return ( 
    <div>
      <Timeline timelineProgress="28" timelineReference="19th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Ring Park</div>
        <div className="clue-background-div">City walls replaced with Ring park</div>
        <div className="clue-background-div">Ready for the clue?</div>
        <Link to="/wuerzburg/ringpark/intro/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg8B;