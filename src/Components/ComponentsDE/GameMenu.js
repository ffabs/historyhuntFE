import '../../App.css';
import '../Header.css';
import '../GameMenu.css';
import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class GameMenu extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    handleClick() {
        let currentState = this.state.open;
        this.props.handleGamemenu(!currentState);
        this.setState({
            open: !this.state.open
        });
    }
    
    render() {
  
        return (
            <div>
                
                
                {this.state.open === true &&
                    <div className="game-menu-show"> 
                        <Link target="_blank" to="/DE">
                            <div className="game-menu-link">Startseite</div>
                        </Link>
                        <HashLink target="_blank" to="/DE/#how">
                            <div className="game-menu-link">So funktioniert's</div>
                        </HashLink>
                        <Link target="_blank" to="/DE/wuerzburg">
                            <div className="game-menu-link">Spiel neustarten</div>
                        </Link>
                        <Link target="_blank" to="/DE/support-us">
                            <div className="game-menu-link">Unterstütze uns</div>
                        </Link>
                        <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=7d82dcd485" target="_blank" rel="noopener noreferrer">
                        <div className="game-menu-link">Feedback geben</div>
                    </a>
                    </div>
                }

                <div className="game-menu">

                    <div className="game-menu-logo"> Ciceru </div>

                    <div className="pointer">
                        <HamburgerMenu
                            isOpen={this.state.open}
                            menuClicked={this.handleClick.bind(this)}
                            color= "#555555"
                            width={25}
                            height={20}
                            // strokeWidth={1}
                            // rotate={0}
                            // color='black'
                            // borderRadius={0}
                            // animationDuration={0.3}
                        />
                    </div>  

                </div>
            </div>
        );

    }  
}



export default GameMenu;