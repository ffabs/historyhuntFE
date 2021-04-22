import '../../App.css';
import '../Header.css';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Nav from './Nav';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            languageCSS: "hide",
        };
    }

    showHideLanguages = event => {
        let newLanguageCss;
        if (this.state.languageCSS === "hide") {
            newLanguageCss = "language-switcher";
        } else {
            newLanguageCss = "hide";
        }
        this.setState({
            languageCSS: newLanguageCss
        });
    }

    handleClick() {
      this.setState({
          open: !this.state.open
      });
    }
    
    render() {
        // let homePage = '';
        let supportPage = '';
        let gamePage= '';
        switch(this.props.page) {
        // case "Home":
        //     homePage += ' current';
        // break;
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
            <div className="App-header">
                <Link to="/DE"> <p className="header-text">Ciceru</p> </Link>
                <div className="desktop">
                    <HashLink to="/DE/#how"> 
                        <div className="header-text header-link">So funktioniert's</div>
                    </HashLink>
                    <Link to="/DE/wuerzburg"> 
                        <div className={gamePage +" header-text header-link"}>Spiel starten</div>
                    </Link>
                    <Link to="/DE/support-us"> 
                        <div className={supportPage +" header-text header-link"}>Unterstütze uns</div>
                    </Link>
                    <div onClick={this.showHideLanguages}>
                        <div className={" header-text header-link language-selector"}>🇩🇪 Deutsch ▾</div>
                    </div>
                    <div className={this.state.languageCSS} onClick={this.showHideLanguages}>
                        <Link to="/"> 
                            <div className="language-option">🇬🇧 English</div>
                        </Link>
                        <Link to="/DE"> 
                            <div className="language-option current">🇩🇪 Deutsch ✔️</div>
                        </Link>    
                    </div>
                </div>

                <div className="hamburger">
                    <HamburgerMenu
                        isOpen={this.state.open}
                        menuClicked={this.handleClick.bind(this)}
                        color= "white"
                        // width={18}
                        // height={15}
                        // strokeWidth={1}
                        // rotate={0}
                        // color='black'
                        // borderRadius={0}
                        // animationDuration={0.3}
                    />
                </div>
                
                {this.state.open === true &&
                    <div className="mobile"> 
                        <Nav {...this.props}/>
                    </div>
                }
            </div>
        );

    }  
}



export default Header;