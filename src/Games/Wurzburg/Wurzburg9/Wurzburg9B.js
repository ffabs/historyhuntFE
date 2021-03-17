import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg9B() {
  return ( 
    <div>
      <Timeline timelineProgress="8" timelineReference="19-20th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">X-Rays</div>
        <div className="clue-background-divs">
        <div className="clue-background-div">At the end of the 19th century, the Physics professor Wilhelm Röntgen stumbled on X-rays and began studying them.</div>
        <div className="clue-background-div">In 1895 he submitted the first paper written on X-rays to Würzburg's Physical-Medical Society journal. In that paper he referred to the radiation as "X", to indicate that it was an unknown type of radiation, but the name stuck until today!</div>
      </div>
      </div>
      <div className="question-section">
        <div className="clue-background-div">Are you ready to look for him in this part of the park?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/xrays/intro/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
        <Link to="/wuerzburg/xrays">
            <div className="gameNext-button-below">
                Back
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg9B;