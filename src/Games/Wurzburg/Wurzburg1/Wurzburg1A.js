import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg1A() {
  return ( 
    <div>
      <Timeline timelineProgress="0" timelineReference="10th B.C."/>
      <div className="clue-background">
        <div className="clue-background-title">Würzbug before Würzbug</div>
        <div className="clue-background-div">Archeological finds have proven that since 1000 B.C. Celtics have been where the fortress is now. After becoming a Roman fort, this area was settled by the Alemanni and finally, in the 6th century, by the Franks.</div>
        <div className="clue-background-div">Despite these original settlements, the official history of Würzburg still had to begin. Come to the old bridge to discover how it started!</div>
        <iframe 
          className="clue-map"
          title="map"
          // frameborder="0" 
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJm8AYjzaQokcRtSwOtsofR5w&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
          // allowfullscreen 
        />
      </div>
      <div className="question-section">
        <div className="clue-background-div">Are you there?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/bridge">
          <div className="gameNext-button">
              Yes, I am at old bridge
          </div>
        </Link>
        <Link to="/wuerzburg">
          <div className="gameNext-button-below">
              Back
          </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg1A;
