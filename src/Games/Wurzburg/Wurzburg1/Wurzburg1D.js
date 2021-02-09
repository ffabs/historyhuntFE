import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg1D() {
  return ( 
    <div>
      <Timeline timelineProgress="2" timelineReference="8th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">The three are also called apostles of Franconia and their subsequent veneration leaded to the quick development of the city.</div>
        <div className="clue-background-div">So, during the 8th century, the bishop of Würzburg was founded. In the same years, the first mention of wine got cultivated in the town and the first cathedral was build: Dom St. Kilian.</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/kilianus/dom">
          <div className="gameNext-button">
              Next Clue
          </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg1D;
