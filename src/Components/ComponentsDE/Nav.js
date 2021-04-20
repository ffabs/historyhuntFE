import React, { Component } from 'react';
import '../../App.css';
import './Header.css';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Nav extends Component {
    
    render() {
        let supportPage = '';
        let gamePage= '';
        switch(this.props.page) {
          case "Support":
            supportPage += ' current';
          break;
          case "Game":
            gamePage += ' current';
          break;
          default:
            gamePage += '';
        }

      return (        
  
          <div className="">
              <div className="nav">
                {this.props.page !== "Home" &&
                  <Link to="/DE">
                    <div className="nav">Startseite</div>
                  </Link>
                }
                <HashLink to="/DE/#how">
                  <div className="nav">So funktioniert's</div>
                </HashLink>
                <Link to="/DE/wuerzburg">
                  <div className={gamePage + " nav"}>Spiel starten</div>
                </Link>
                <Link to="/DE/support-us">
                  <div className={supportPage + " nav"}>Unterstütze uns</div>
                </Link>
              </div>
        </div>
  
      );
      
    }
  
  }
  
  export default Nav;