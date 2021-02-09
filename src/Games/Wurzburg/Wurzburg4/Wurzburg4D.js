import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg4D() {
  return ( 
    <div>
      <Timeline timelineProgress="5" timelineReference="16th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">Interestingly, Martin Luther's revolution happened in roughtly the same years. However, even if Luther's thoughts may have added intensity to the uprising movements, it did not create them and he even vehemently opposed the revolts. Actually, Martin Luther was even received by the bishop Lorenz Von Bibra (earlier met in the Dom) and they got along very well with each other.</div>
        <div className="clue-background-div">The next bishop however, was not as friendly with Luther's ideas...</div>
      </div>
      <div className="buttons-section">
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
