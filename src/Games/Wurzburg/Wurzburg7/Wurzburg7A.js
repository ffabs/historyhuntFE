import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg7A() {
  return ( 
    <div>
      <Timeline timelineProgress="27" timelineReference="17-18th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">The Residenz</div>
        <div className="clue-background-div">Come at the Residenz</div>
        <div className="clue-background-div">(Residenzplatz 2, 97070 Würzburg), </div>
        <iframe 
          className="clue-map"
          title="map"
          // frameborder="0" 
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIXAT0C2QokcRP7mt9f4E7NA&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
          // allowfullscreen 
        />
        <div className="clue-background-div">...arrived?</div>
        <Link to="/wuerzburg/residenz/intro">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg7A;