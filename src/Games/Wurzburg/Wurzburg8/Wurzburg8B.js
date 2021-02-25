import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg8B() {
  return ( 
    <div>
      <Timeline timelineProgress="7" timelineReference="19th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Ring Park</div>
        <div className="clue-background-div">Now that you have reached the point, you should get some clues on what this park was in the past...</div>
        <div>burgermeister = mayor</div>
        <div>wohnungs = housing</div>
        <div>befeshgungsaniage = fortification</div>
        <div>schulwesen = school system</div>
        <div>reformierte = reform</div>
      </div>
      <div className="question-section">
        <div className="clue-background-div">Ready for the clue?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/ringpark/intro/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
        <Link to="/wuerzburg/ringpark">
            <div className="gameNext-button-below">
                Back
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg8B;