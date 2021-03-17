import React, { Component } from 'react';
import '../App.css';
import './Header.css';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Nav extends Component {
    
    render() {

      return (        
  
          <div className="">
              <div className="nav">
                <Link to="/">
                  <div className="nav">Home</div>
                </Link>
                <HashLink to="/#how">
                  <div className="nav">How it works</div>
                </HashLink>
                <Link to="/wuerzburg">
                  <div className="nav">Start game</div>
                </Link>
                <Link to="/support-us">
                  <div className="nav">Support us</div>
                </Link>
              </div>
        </div>
  
      );
      
    }
  
  }
  
  export default Nav;