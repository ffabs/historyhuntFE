import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg1B() {
  return ( 
    <div>
      <Timeline timelineProgress="21" timelineReference="7th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">A martyrdom that changed everything</div>
        <div className="clue-background-div">At the end of the 7th century, an event that changed this area deeply happened: the martyrdom of the Irish missionaries that brought Christianity to the region.</div>
        <div className="clue-background-div">The three saints are are still commemorated on this very bridge today, each with a statue among the 12 present on the bridge.</div>
        <div className="clue-background-div">Are you ready to find them?</div>
        <Link to="/wuerzburg/bridge/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg1B;
