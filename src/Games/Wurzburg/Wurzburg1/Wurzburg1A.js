import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg1A() {
  return ( 
    <div>
      <Timeline timelineProgress="20" timelineReference="10th B.C."/>
      <div className="clue-background">
        <div className="clue-background-title">Before Würzbug</div>
        <div className="clue-background-div">Archeological finds have proven that since 1000 B.C. Celtics were in the area where the fortress is now.</div>
        <div className="clue-background-div">After becoming a Roman fort, this area was settled by the Alamanni and finally, in the 6th century, by the Franks.</div>
        <div className="clue-background-div">Despite all these original settlements, officially Würzburg history still had to begin. To see how Würzburg history started, come at the old bridge...</div>
        <div className="clue-background-div">...are you there?</div>
        <Link to="/wuerzburg/bridge">
          <div className="gameNext-button">
              Yes, I am at old bridge
          </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg1A;
