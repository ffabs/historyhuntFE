import Timeline from '../WurzburgComponents/Timeline';
import kilianifest from '../WurzburgImages/kilianifest.png';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg11B() {
  return ( 
    <div>
      <Timeline timelineProgress="10" timelineReference="20-21th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Current times</div>
        <img src={kilianifest} className="gameIntro-image" alt="kilianifest" />
        <div className="clue-background-div">
          Since 1981 the Residence and its garden are protected by UNESCO in the list of "cultural and natural heritage of the world" considering it as a great expression of the European Baroquethe.
          {/* In 2010, the € 100 gold coin UNESCO World Heritage - Würzburg Residence and Court Garden appeared */}
        </div>
      </div>
      <div className="question-section">
        <div className="clue-background-div">...ready?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/currenttimes/intro/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg11B;