import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg8A() {
  return ( 
    <div>
      <Timeline timelineProgress="8" timelineReference="19th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Ring Park</div>
        <div className="clue-background-div">Come at the ring park </div>
        <div className="clue-background-div">(QWWJ+V8 Würzburg), </div>
        <iframe 
          className="clue-map"
          title="map"
          // frameborder="0" 
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=place_id:GhIJuB6F61HlSEAR2c73U-PhI0A&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
          // allowfullscreen 
        />
      </div>
      <div className="buttons-section">
        <div className="clue-background-div">...arrived?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/ringpark/intro">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg8A;