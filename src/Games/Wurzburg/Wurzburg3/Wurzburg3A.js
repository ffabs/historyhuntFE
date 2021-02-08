import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg3A() {
  return ( 
    <div>
      <Timeline timelineProgress="24" timelineReference="13-14th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">The City Council</div>
        <div className="clue-background-div">Come back at Grafeneckart</div>
        <div className="clue-background-div">(Rückermainstraße 2, 97070 Würzburg), </div>
        <iframe 
          className="clue-map"
          title="map"
          // frameborder="0" 
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJP70VHDSQokcR5KaO6hSVBjc&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
          // allowfullscreen 
        />
        <div className="clue-background-div">...arrived?</div>
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
