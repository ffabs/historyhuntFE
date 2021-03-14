import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';
import './Home.css';
import './Pages.css';

function Thank() {
  return ( 
    <div className="home">
      <Header />
        <div className="home-background">
            Thank you for your support
        </div>
      <Footer />
    </div>  
  );
}

export default Thank;