import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg4D() {
  return ( 
    <div>
      <Timeline timelineProgress="25" timelineReference="16th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">The German Peasants' War was Europe's largest and most widespread popular uprising prior to the French Revolution of 1789.
In 1525, the peasants in Würzburg were defeated.</div>
        <div className="clue-background-div">Protestants didn't have a luckier fate. Not long after...</div>
        <Link to="/wuerzburg/julius">
            <div className="gameNext-button">
            Next Clue
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg4D;
