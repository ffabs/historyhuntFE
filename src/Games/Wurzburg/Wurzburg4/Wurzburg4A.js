import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg4A() {
  return ( 
    <div>
      <Timeline timelineProgress="25" timelineReference="16th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">The Peasants’ War</div>
        {/* <div className="clue-background-div">Come back at Grafeneckart</div>
        <div className="clue-background-div">(Rückermainstraße 2, 97070 Würzburg), </div>
        <div className="clue-background-div">...arrived?</div> */}
        <Link to="/wuerzburg/citycouncil">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg4A;
