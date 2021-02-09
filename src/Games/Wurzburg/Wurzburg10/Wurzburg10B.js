import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg10B() {
  return ( 
    <div>
      <Timeline timelineProgress="10" timelineReference="20th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">World Wars</div>
        <div className="clue-background-div">sinagoga persa, deportazione ebrea, guerra mondiale distrugge wurzburg - stazione - cercare una targetta su una valigia?</div>
      </div>
      <div className="buttons-section">
        <div className="clue-background-div">...ready?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/worldwar/intro/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg10B;