import Timeline from '../WurzburgComponents/Timeline';
// import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg11D() {
  return ( 
    <div>
      <Timeline timelineProgress="31" timelineReference="21th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Congrats for reaching the end!</div>
        <div className="clue-background-div">Feedback?</div>
        <div className="clue-background-div">Recap of the journey and on what you did (score)
        Discounts
        Invite a friend
        why not going to the wine yards for a wine?</div>
      </div>
    </div>  
  );
}

export default Wurzburg11D;