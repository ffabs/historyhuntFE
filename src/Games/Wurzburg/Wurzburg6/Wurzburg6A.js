import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg6A() {
  return ( 
    <div>
      <Timeline timelineProgress="26" timelineReference="17th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">The Falkenhous</div>
        <div className="clue-background-div">Come at the Falkenhous</div>
        <div className="clue-background-div">(QWWJ+V8 Würzburg), </div>
        <iframe 
          className="clue-map"
          title="map"
          // frameborder="0" 
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJhQFqjDOQokcRmAyY1vYDFiI&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
          // allowfullscreen 
        />
        <div className="clue-background-div">...arrived?</div>
        <Link to="/wuerzburg/falkenhous/taxes">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg6A;