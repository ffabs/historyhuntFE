import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg8B() {
  return ( 
    <div>
      <Timeline timelineProgress="7" timelineReference="19th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Ring Park</div>
        <div className="clue-background-div">In order to solve the next clue, it might be helpful to learn the following German words:</div>
        <ul className="clue-background-div">
          <li>Bürgermeister = Mayor</li>
          <li>Wald = Forest</li>
          <li>Wasser = Water</li>
          <li>Wohnung = Housing</li>
          <li>Befestigungsanlage = Fortification</li>
          <li>Schulwesen = School System</li>
          <li>Reformierte = Reform</li>
        </ul>
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