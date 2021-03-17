import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg3B() {
  return ( 
    <div>
      <Timeline timelineProgress="4" timelineReference="12-14th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">The Town Hall</div>
        <div className="clue-background-divs">
        <div className="clue-background-div">In the 12th century the people of Würzburg formed a corporation to contrast the increasing demands of the prince-bishops. As consequences, in 1253 the bishop left the city to live protected in the castle and in 1256 the city council was banned.</div>
        <div className="clue-background-div">Nevertheless, in 1316 the city council procured this tower building which has since served as the Rathaus or town hall.</div>
        </div>
      </div>
      <div className="question-section">
        <div className="clue-background-div">Why is there a tree painting on the building?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/citycouncil/sundial">
            <div className="gameNext-button">
                Let's find out!
            </div>
        </Link>
        <Link to="/wuerzburg/citycouncil/sundial/clue">
            <div className="gameNext-button-below">
                Skip this part
            </div>
        </Link>
        <Link to="/wuerzburg/domAnswer/citizens">
            <div className="gameNext-button-below">
                Back
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg3B;
