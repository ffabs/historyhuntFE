import Timeline from '../WurzburgComponents/Timeline';
import residenz from '../WurzburgImages/residenz-in-const.png';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg7B() {
  return ( 
    <div>
      <Timeline timelineProgress="6" timelineReference="17-18th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">The Residence</div>
        {/* <div className="clue-background-div">After the Swedish war and occupation, within a space of 100 years a bishop’s palace was built, the Residenz and the bishops moved from the fortress to the Residenz.</div> */}
        <div className="clue-background-div">The bishop Johann Philipp Franz von Schönborn, having won a fortune in a court case, used it to undertake this massive building project. He moved the court from the fortress to the Residenz to appear as an absolute monarch of the time - living into something comparable to the Palace of Versailles or Schönbrunn Palace. The foundation stone was laid on 22 May 1720 (see image below of the Residence under construction in 1731)</div>
        <img src={residenz} className="gameIntro-image" alt="residenz" />
        <div className="clue-background-div">Go into the Chapel, in the right side of the building (it is open to the public for free)</div>
      </div>
      <div className="question-section">
        <div className="clue-background-div">Are you there?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/residenz/intro/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
        <Link to="/wuerzburg/residenz">
            <div className="gameNext-button-below">
                Back
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg7B;