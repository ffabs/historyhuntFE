import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg11B() {
  return ( 
    <div>
      <Timeline timelineProgress="31" timelineReference="21th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Current times</div>
        <div className="clue-background-div">nuova sinagoga, 
la residenza è patrimonio dell'umanità - residenza
in 2004 celebrations mark 1300 years of Würzburg

Today, Kilian still plays an important role for the city, he is the patron saint of Würzburg and always in July there is a famous fair, called "Kiliani". fontain</div>
        <div className="clue-background-div">...ready?</div>
        <Link to="/wuerzburg/currenttimes/intro/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg11B;