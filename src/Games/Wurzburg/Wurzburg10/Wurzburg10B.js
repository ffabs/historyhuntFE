import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg10B() {
  return ( 
    <div>
      <Timeline timelineProgress="9" timelineReference="20th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">World Wars</div>
        <div className="clue-background-div">
          Originally, the city of wurzburg erected this war memorial for the fallen soldiers of the first world war. 
          Even if it was initially rejected by the National Socialists, it was then misused by them as a “Hero's Memorial”.
        </div>
      </div>
      <div className="question-section">
        <div className="clue-background-div">...ready for the clue?</div>
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