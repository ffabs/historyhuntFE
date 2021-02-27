import Timeline from '../WurzburgComponents/Timeline';
import unesco from '../WurzburgImages/unesco.jpg';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg11B() {
  return ( 
    <div>
      <Timeline timelineProgress="10" timelineReference="20-21th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Current times</div>
        <div className="clue-background-div">
          After the Second World War, the city recovered quickly from the destructions suffered. The houses and historical buildings were rebuilt.
        </div>
        <div className="clue-background-div">
          Since 1981 the Residence and its garden have even been protected by UNESCO, included in the list of "cultural and natural heritage of the world" because considered as a great expression of the European Baroque.
          {/* In 2010, the € 100 gold coin UNESCO World Heritage - Würzburg Residence and Court Garden appeared */}
        </div>
        <img src={unesco} className="gameIntro-image" alt="unesco" />
      </div>
      <div className="question-section">
        <div className="clue-background-div">Are you ready for the last clue?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/currenttimes/intro/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
        <Link to="/wuerzburg/worldwar/intro/clueAnswer">
            <div className="gameNext-button-below">
                Back
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg11B;