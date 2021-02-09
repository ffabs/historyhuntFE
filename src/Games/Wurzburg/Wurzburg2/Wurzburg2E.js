import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg2E() {
  return ( 
    <div>
      <Timeline timelineProgress="3" timelineReference="12-13th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">Since the foundation of the bishop and cathedral, the bishops have become increasingly more powerful. In 1168 the bishop of Würzburg was even made duke by the emperor Barbarossa, starting the period of the prince-bishops of Würzburg which lasted until 1803.</div>
        <div className="clue-background-div">Not everyone in Würzburg has always been happy with the powerful bishops though...</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/domAnswer/citizens">
          <div className="gameNext-button">
              Next Clue
          </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg2E;