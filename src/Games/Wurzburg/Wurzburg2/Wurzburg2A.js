import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg2A() {
  return ( 
    <div>
      <Timeline timelineProgress="2" timelineReference="8th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Kilian’s Cathedral</div>
        <div className="clue-background-div">Dom St. Kilian, so ancient that it was consecreted in the presence of the Frankish king Charlemagne, is still here today documenting centuries of city, church and art history.</div>
        <iframe 
          className="clue-map"
          title="map"
          // frameborder="0" 
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJs12zIdSPokcRJ4YwI8k4eMM&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
          // allowfullscreen 
        />
      </div>
      <div className="question-section">
        <div className="clue-background-div">Let's go there!</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/kilianus/dom/openings">
            <div className="gameNext-button">
                Arrived
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg2A;
