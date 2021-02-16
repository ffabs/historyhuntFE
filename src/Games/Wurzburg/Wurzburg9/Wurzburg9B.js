import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg9B() {
  return ( 
    <div>
      <Timeline timelineProgress="8" timelineReference="19-20th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">X-Rays</div>
        <div className="clue-background-div">At the end of the 19th century, the physics professor Wilhelm Röntgen stumbled on X-rays and began studying them. He wrote an initial report "On a new kind of ray: A preliminary communication" and in 1895 submitted it to Würzburg's Physical-Medical Society journal. This was the first paper written on X-rays. Röntgen referred to the radiation as "X", to indicate that it was an unknown type of radiation. The name stuck.</div>
      </div>
      <div className="question-section">
        <div className="clue-background-div">...ready to look into his notes?</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/xrays/intro/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg9B;