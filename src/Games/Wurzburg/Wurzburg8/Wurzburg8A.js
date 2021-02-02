import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg8A() {
  return ( 
    <div>
      <Timeline timelineProgress="28" timelineReference="19th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Ring Park</div>
        <div className="clue-background-div">Come at the ring park </div>
        <div className="clue-background-div">(QWWJ+V8 Würzburg), </div>
        <div className="clue-background-div">...arrived?</div>
        <Link to="/wuerzburg/ringpark/intro">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg8A;