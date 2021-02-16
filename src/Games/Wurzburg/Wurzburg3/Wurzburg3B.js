import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg3B() {
  return ( 
    <div>
      <Timeline timelineProgress="4" timelineReference="12-14th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">The City Council</div>
        <div className="clue-background-div">In the 12th century the people of Würzburg formed a corporation to contrast the increasing demands of the prince-bishops. As a sign of breach of trust, in 1253 the bishop left the city to live protected in the castle and in 1256 the city council was banned.</div>
        <div className="clue-background-div">Nevertheless, in 1316 the city council procured this tower building which has since served as the Rathaus or town hall.</div>
        {/* <div className="clue-background-div">The Bürgerspital hospital was founded by the rich citizens.</div> */}
      </div>
      <div className="question-section">
        <div className="clue-background-div">Ready for the clue?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/citycouncil/sundial">
            <div className="gameNext-button">
                Yes
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
