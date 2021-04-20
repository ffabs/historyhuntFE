import '../../App.css';
import './Footer.css';
import {Link} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className="footer">
        <Link to="/DE">
            <div className="footer-element">Startseite</div>
        </Link>
        <Link to="/DE/wuerzburg">
            <div className="footer-element">Spiel starten</div>
        </Link>
        <Link to="/DE/support-us">
            <div className="footer-element">Unterstütze uns</div>
        </Link>
        <div className="footer has-text-centered">
          <div>
            Finden Sie uns auf
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
            Alle Rechte vorbehalten
          </div>
          <a href="https://www.websitepolicies.com/policies/view/hE91TkeO" target="_blank" rel="noopener noreferrer" className="policies">
            Geschäftsbedingungen
          </a> 
          <a href="https://www.websitepolicies.com/policies/view/e5EzZHZ7" target="_blank" rel="noopener noreferrer" className="policies">
            Datenschutz-Bestimmungen
          </a>    
          <div className="logo-name">
            Ciceru
          </div>
        </div>
    </div>
  );
}

export default Footer;