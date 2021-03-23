import React, { Component } from 'react';
import wuerzburg from '../WurzburgImages/wuerzburg-intro.png';
import Header from '../../../Components/Header';
import GameMenu from '../../../Components/GameMenu';
import Footer from '../../../Components/Footer';
import {Link} from 'react-router-dom';
import './Wurzburg0.css';
// import girlwalking from '../../../Images/girlwalking.png';

class Wurzburg0 extends Component {
    
    render() {
        return ( 
            <div>
                <div className="header-footer"><Header page={'Game'}/></div>
            
                <div className="game-page">
                    
                <div className="game-desktop">
                    Please use your phone to enjoy the best game experience!
                </div>
                {/* <img src={girlwalking} className="home-howitworks-image" alt="girlwalking" /> */}
                <div className="game-page-border">
                {this.props.gamemenu !== true && 
                <div> 
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
                </div>}
                <GameMenu {...this.props}/>
                </div>
                </div>
                <div className="header-footer"><Footer /></div>
            </div>
        );
    }
}

export default Wurzburg0;