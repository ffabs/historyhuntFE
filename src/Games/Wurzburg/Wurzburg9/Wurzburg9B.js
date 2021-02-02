import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg9B() {
  return ( 
    <div>
      <Timeline timelineProgress="29" timelineReference="19th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">X Rays</div>
        <div className="clue-background-div">In 1895, a physics professor Wilhelm Röntgen stumbled on X-rays and began studying them. He wrote an initial report "On a new kind of ray: A preliminary communication" and on December 28, 1895 submitted it to Würzburg's Physical-Medical Society journal.[14] This was the first paper written on X-rays. Röntgen referred to the radiation as "X", to indicate that it was an unknown type of radiation. The name stuck.</div>
        <div className="clue-background-div">...ready to look into his notes?</div>
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