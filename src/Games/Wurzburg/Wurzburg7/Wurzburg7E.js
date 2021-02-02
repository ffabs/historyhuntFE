import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg7E() {
  return ( 
    <div>
      <Timeline timelineProgress="28" timelineReference="19th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Well done!</div>
        <div className="clue-background-div">Despite the new achievements of the Residence and the town was enlarged, the age of the prince-bishops was coming to an end.
Secularization finally divorced the sacred and the secular in 1803.
i bishops sono alla fine e (anche occupazione francese forse Napoleon)</div>
        <div className="clue-background-div">...next clue?</div>
        <Link to="/wuerzburg/ringpark">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg7E;