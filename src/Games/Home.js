import {Link} from 'react-router-dom';

function Home() {
  return ( 
    <div>
        Home
        <Link to="/wuerzburg">
            <div>
                Time travelling in Wuerzburg
            </div>
        </Link>
    </div>  
  );
}

export default Home;
