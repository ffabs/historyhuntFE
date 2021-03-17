import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';
import uni from '../WurzburgImages/uni.svg.png';

function Wurzburg5B() {
  return ( 
    <div>
      <Timeline timelineProgress="5" timelineReference="16th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Julius Echter</div>
        <div className="clue-background-divs">
        <div className="clue-background-div">Julius Echter was a strong representative of the Counter Reformation, bringing Catholicism back in the diocese of Würzburg and expelling the Protestants.</div>
        <div className="clue-background-div">In addition, he is known for having renewed the state legal system, led the diocese out of debt without taxes and re-established the university, which still holds his name today!</div>
        </div>
        <img src={uni} className="lorenz-image" alt="uni" />
        <div className="clue-background-div">However, he is not remembered only as an important administrative reformer but also as a great builder. One example is the building at the other side of the street that also takes his name: the Juliusspital.</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/julius/statue/clue">
            <div className="gameNext-button">
                Next
            </div>
        </Link>
        <Link to="/wuerzburg/julius">
            <div className="gameNext-button-below">
                Back
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg5B;