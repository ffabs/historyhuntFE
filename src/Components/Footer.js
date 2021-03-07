import '../App.css';
import './Footer.css';
import {Link} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className="footer">
        <Link to="/">
            <div className="footer-element">Homepage</div>
        </Link>
        <Link to="/wuerzburg">
            <div className="footer-element">Start game</div>
        </Link>
        {/* <Link to="/">
            <div className="footer-element">Support us</div>
        </Link> */}
        {/* <div className="footer-element"> Privacy policy </div> */}
        <div className="footer has-text-centered">
          <div>
            Find us on
          </div>
          <div className="social-section">
              <div className="social fac">
                <SocialIcon className="icon" url="https://www.facebook.com/Ciceru-101281968669466" style={{ height: 50, width: 50 }} bgColor="#98A1AB" target="_blank" rel="noopener noreferrer"/>
              </div>  
              <div className="social">
                <SocialIcon className="icon" url="https://mobile.twitter.com/ciceru1" style={{ height: 50, width: 50 }} bgColor="#98A1AB" target="_blank" rel="noopener noreferrer"/>
              </div>
              <div className="social insta">
                <SocialIcon className="icon" url="https://www.instagram.com/ciceruinsta/" style={{ height: 50, width: 50 }} bgColor="#98A1AB" target="_blank" rel="noopener noreferrer"/>
              </div>
          </div>
          <div>
            All Rights Reserved
          </div>
          <div className="logo-name">
            Ciceru
          </div>
        </div>
    </div>
  );
}

export default Footer;