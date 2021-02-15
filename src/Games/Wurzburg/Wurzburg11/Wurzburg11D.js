import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg11D() {
  return ( 
    <div>
      <Timeline timelineProgress="10" timelineReference="21th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Congrats for reaching the end!</div>
      </div>
      <div className="question-section">
        <div className="clue-background-div">Today, Kilian still plays an important role for the city, he is the patron saint of Würzburg and always in July there is a famous fair, called "Kiliani".</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/currenttimes/intro/clue">
          <div className="gameNext-button">
            Feedback
          </div>
        </Link>
        <Link to="/wuerzburg/currenttimes/intro/clue">
          <div className="gameNext-button">
          Invite a friend
          </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg11D;