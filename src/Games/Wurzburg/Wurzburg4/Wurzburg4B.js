import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg4B() {
  return ( 
    <div>
      <Timeline timelineProgress="25" timelineReference="16th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">The Peasants’ War</div>
        <div className="clue-background-div">Martin Luther is received by the bishop:
Lorenz met with and got along well with Martin Luther.</div>
        <div className="clue-background-div">The Peasants’ war, Historians disagree on the nature of the revolt and its causes. What is clear is the two events, Luther's Protestant Reformation and the German Peasants' War, were occurring in the same years but they were separate: Luther's revolution may have added intensity to these movements, but did not create them, he even vehemently opposed the revolts;</div>
        <div className="clue-background-div">The German Peasants' War was Europe's largest and most widespread popular uprising prior to the French Revolution of 1789.
In 1525, the peasants in Würzburg were defeated.</div>
        <div className="clue-background-div">Ready to solve the clue?</div>
        <Link to="/wuerzburg/peasants/memorial/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg4B;
