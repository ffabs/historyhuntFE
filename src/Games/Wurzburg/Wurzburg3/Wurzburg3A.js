import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg3A() {
  return ( 
    <div>
      <Timeline timelineProgress="4" timelineReference="13-14th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">The City Council</div>
        <div className="clue-background-div">Come back towards the bridge but stop at the oldest part of the town hall this time.</div>
        <iframe 
          className="clue-map"
          title="map"
          // frameborder="0" 
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAQO13xyRokcRt0VftfVsiVk&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
          // allowfullscreen 
        />
      </div>
      <div className="question-section">
        <div className="clue-background-div">...arrived?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/citycouncil">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg3A;
