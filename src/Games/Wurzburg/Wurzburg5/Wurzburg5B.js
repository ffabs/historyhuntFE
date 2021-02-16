import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg5B() {
  return ( 
    <div>
      <Timeline timelineProgress="5" timelineReference="16th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">Julius Echter</div>
        <div className="clue-background-div">Julius Echter was a strong representative of the Counter Reformation, bringing Catholicism back in the diocese of Würzburg and expelling the Protestants. In addition, he is remembered for many other initiatives: he renewed the state legal system, led the diocese out of debt without taxes and re-established the university, which still holds his name today!</div>
        <div className="clue-background-div">However, he is not remembered only as an important administrative reformer but also as a great builder. One example is the building at the other side of the street that takes his name: Juliusspital.</div>
      </div>
      <div className="buttons-section">
        <Link to="/wuerzburg/julius/statue/clue">
            <div className="gameNext-button">
                Next
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg5B;