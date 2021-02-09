import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg3B() {
  return ( 
    <div>
      <Timeline timelineProgress="4" timelineReference="13-14th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">The City Council</div>
        <div className="clue-background-div">In 1256 the city council was first mentioned but banned just 40 years later. In 1316 the Grafeneckart was turned into the Rathaus or town hall. 
        The Bürgerspital hospital was founded by the rich citizens.</div>
        <div className="clue-background-div">
        However, the bishop did not allow a representative new building.
        The citizens of the city revolted several times against the prince-bishop and were defeated.</div>
        <div className="clue-background-div">
        (The first university was founded in 1402.
        The Jewish pogrom happened in 1349.)</div>
      </div>
      <div className="question-section">
        <div className="clue-background-div">Ready?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/citycouncil/sundial">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg3B;
