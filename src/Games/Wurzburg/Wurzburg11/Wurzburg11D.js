import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import kilianifest from '../WurzburgImages/kilianifest.png';
import '../Wurzburg.css';

function Wurzburg11D() {
  return ( 
    <div>
      <Timeline timelineProgress="10" timelineReference="21th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Congrats for reaching the end!</div>
      </div>
      <img src={kilianifest} className="gameIntro-image" alt="kilianifest" />
      <div className="question-section">
        <div className="clue-background-div">Today, Kilian still plays an important role for the city, he is the patron saint of Würzburg and always in July there is a famous fair, called "Kiliani".</div>
      </div>
      <div className="buttons-section">
        <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=e11c3c40f6" target="_blank" rel="noopener noreferrer">
          <div className="gameNext-button">Give Feedback</div>
        </a>
        <Link to="/wuerzburg/currenttimes/intro/clue">
          <div className="gameNext-button-below">
          Invite a friend
          </div>
        </Link>
        <Link to="/wuerzburg/currenttimes/intro/clue">
            <div className="gameNext-button-below">
                Back
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg11D;