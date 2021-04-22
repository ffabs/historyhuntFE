import React, { Component } from 'react';
import '../../App.css';
import '../Header.css';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Nav extends Component {
  constructor() {
      super();
      this.state = {
          languageCSS: "hide",
      };
  }

  showHideLanguages = event => {
    let newLanguageCss;
    if (this.state.languageCSS === "hide") {
        newLanguageCss = "";
    } else {
        newLanguageCss = "hide";
    }
    this.setState({
        languageCSS: newLanguageCss
    });
  }
    
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
                  <Link to="/">
                    <div className="nav">Home</div>
                  </Link>
                }
                <HashLink to="/#how">
                  <div className="nav">How it works</div>
                </HashLink>
                <Link to="/wuerzburg">
                  <div className={gamePage + " nav"}>Start game</div>
                </Link>
                <Link to="/support-us">
                  <div className={supportPage + " nav"}>Support us</div>
                </Link>
                <div onClick={this.showHideLanguages}>
                    <div className={" nav language-selector"}>🇬🇧 English ▾</div>
                </div>
                <div className={this.state.languageCSS} onClick={this.showHideLanguages}>
                    <Link to="/"> 
                        <div className="nav language-option-nav current">🇬🇧 English ✔️</div>
                    </Link>
                    <Link to="/DE"> 
                        <div className="nav language-option-nav">🇩🇪 Deutsch</div>
                    </Link>    
                </div> 
              </div>
        </div>
  
      );
      
    }
  
  }
  
  export default Nav;