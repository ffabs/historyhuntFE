import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';
import './Home.css';
import './Pages.css';

function Support() {
  return ( 
    <div className="home">
      <Header />
        <div>Thank you for your interest in supporting us!</div>
        <div>Ciceru is a self founded project </div>
        <div className="home-background">
            Support us
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="P3BFTNB5M6JGE" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_DE/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </div>
      <Footer />
    </div>  
  );
}

export default Support;