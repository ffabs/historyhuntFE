import '../App.css';
import './Header.css';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <div className="App-header">
        <Link to="/"> <p className="header-text">Ciceru</p> </Link>
        <div className="header-links">
            <HashLink to="/#how"> 
                <div className="header-text header-link">How it works</div>
            </HashLink>
            <Link to="/wuerzburg"> 
                <div className="header-text header-link">Start game</div>
            </Link>
            {/* <Link to="/"> 
                <div className="header-text header-link">Support us</div>
            </Link> */}
        </div>
    </div>
  );
}

export default Header;