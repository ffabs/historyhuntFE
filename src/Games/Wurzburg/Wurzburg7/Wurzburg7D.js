import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg7D() {
  return ( 
    <div>
      <Timeline timelineProgress="6" timelineReference="17-18th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well Done!</div>
        <div className="clue-background-divs">
          <div className="clue-background-div">The Residence was built when Würzburg was still a fortified town. Therefore, the garden too had to be planned within the fortifications. The solution included two bastions of the fortified town wall, using its differences in height to create a very special landscape. From west to east there is a rise in ground, until the level of the wall is reached.</div>
          <div className="clue-background-div">Let's go inside the garden for the next clue!</div>
        </div>
      </div>
      {/* <iframe 
          className="clue-map"
          title="map"
          // frameborder="0" 
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=place_id:GhIJZmZmZmblSEARXI_C9SjgI0A&key=AIzaSyDx8TjLXQy9CIDjVVVU2EH2LXibwQRNKxs" 
          // allowfullscreen 
      /> */}
      <div className="question-section">
        <div className="clue-background-div">...are you there?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/residenz/garden/clueQuestion">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
        <Link to="/wuerzburg/residenz/garden/timings">
            <div className="gameNext-button-below">
                When are they open?
            </div>
        </Link>
        <Link to="/wuerzburg/residenz/intro/clue">
            <div className="gameNext-button-below">
                Back
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg7D;