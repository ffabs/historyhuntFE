import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';
import './Home.css';
import './Pages.css';
import { SocialIcon } from 'react-social-icons';
import feedbackicon from '../Images/feedbackicon.png';
import annouce from '../Images/annouce.png';

function Thank() {
  return ( 
    <div className="home">
      <Header page={'Support'}/>
      <div className="support-page"> 
        <div className="section-title">
            Thank you for your support!!
        </div>
        <div className="howitworks-step-subtitle thankyoupage">Thanks for helping us maintaining and creating new historical treasure hunt-style experiences.</div>
        <img src={annouce} className="home-howitworks-image thankyoupage" alt="annouce" />
        <div className="howitworks-step-subtitle thankyoupage-more">See you in the next adventure!</div>
        <div className="howitworks-step-subtitle ">By the way, if you want to support Ciceru further, don't forget to share your feedback and like our social media accounts:</div>
        <div className="social-section support-socials">
            <div className="social">
              <a href="https://us1.list-manage.com/survey?u=27bed50594116df471c55e108&id=e11c3c40f6" target="_blank" rel="noopener noreferrer">
              <img src={feedbackicon} className="home-howitworks-image" alt="feedbackicon" style={{ height: 50, width: 50 }}/>
              </a> 
            </div>
            <div className="social fac">
              <SocialIcon className="icon" url="https://www.facebook.com/Ciceru-101281968669466" style={{ height: 50, width: 50 }} target="_blank" rel="noopener noreferrer"/>
            </div>  
            <div className="social">
              <SocialIcon className="icon" url="https://mobile.twitter.com/ciceru1" style={{ height: 50, width: 50 }} target="_blank" rel="noopener noreferrer"/>
            </div>
            <div className="social insta">
              <SocialIcon className="icon" url="https://www.instagram.com/ciceruinsta/" style={{ height: 50, width: 50 }} target="_blank" rel="noopener noreferrer"/>
            </div>
        </div>
      </div>
      <Footer />
    </div>  
  );
}

export default Thank;