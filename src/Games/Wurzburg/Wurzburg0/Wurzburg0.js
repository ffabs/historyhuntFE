import wuerzburg from '../WurzburgImages/wuerzburg-intro.png';
import {Link} from 'react-router-dom';
import './Wurzburg0.css';

function Wurzburg0() {
  return ( 
    <div className="gameIntro">
        <div className="gameIntro-title">
            <div>A journey through time</div>
            <div>in Würzburg</div>
        </div>
        <img src={wuerzburg} className="gameIntro-image" alt="wuerzburg" />
        <div className="gameIntro-details">
            <div className="gameIntro-detail">
                <div className="gameIntro-detail-icon">🚶</div>
                <div>6.0 km</div>
            </div>
            <div className="gameIntro-detail">
                <div className="gameIntro-detail-icon">⏱️</div>
                <div>2.15 h</div>
            </div>
        </div>
        <Link to="/wuerzburg/start">
            <div className="gameIntro-button">
                Start the journey
            </div>
        </Link>
    </div>  
  );
}

export default Wurzburg0;
