import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg2A() {
  return ( 
    <div>
      <Timeline timelineProgress="22" timelineReference="8th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Kilian’s Cathedral</div>
        <div className="clue-background-div">Dom St. Kilian, so ancient that it was consecreted in the presence of the Frankish kind Charlemagne, survived through the centuries and is still here today.</div>
        <div className="clue-background-div">So, let's go there!</div>
        <div className="clue-background-div">(Domstrasße 40, 97070 Wuürzburg), </div>
        <iframe 
          className="clue-map"
          title="map"
          // frameborder="0" 
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJs12zIdSPokcRJ4YwI8k4eMM&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
          // allowfullscreen 
        />
        <div className="clue-background-div">...arrived?</div>
        <Link to="/wuerzburg/kilianus/dom/openings">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg2A;
