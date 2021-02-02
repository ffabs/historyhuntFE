import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg10A() {
  return ( 
    <div>
      <Timeline timelineProgress="30" timelineReference="20th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">World Wars</div>
        <div className="clue-background-div">Come at the hbf</div>
        <div className="clue-background-div">(QWWJ+V8 Würzburg), </div>
        <div className="clue-background-div">...arrived?</div>
        <Link to="/wuerzburg/worldwar/intro">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg10A;