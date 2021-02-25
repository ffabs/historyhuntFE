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
        <div className="clue-background-div">The bishop Johann Philipp Franz von Schönborn wanted to appear as a monarch of his time, living in a palace comparable to the one of Versailles or Schönbrunn. Having won a fortune in a court case, he used it to undertake this impressive building project in 1720.</div>
        <div><i>The Residence under construction in 1731:</i></div>
        <img src={residenz} className="gameIntro-image" alt="residenz" />
      </div>
      <div className="question-section">
        <div className="clue-background-div">Can you go in the Court Chapel?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/residenz/intro/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
        <Link to="/wuerzburg/residenz/intro/help">
            <div className="gameNext-button-below">
                How can I get in?
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