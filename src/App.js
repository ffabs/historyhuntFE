import './App.css';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
// import Home from './Games/Home';
import Home from './Pages/Home';
import Wurzburg0 from './Games/Wurzburg/Wurzburg0/Wurzburg0';
import Wurzburg1A from './Games/Wurzburg/Wurzburg1/Wurzburg1A';
import Wurzburg1B from './Games/Wurzburg/Wurzburg1/Wurzburg1B';
import Wurzburg1C from './Games/Wurzburg/Wurzburg1/Wurzburg1C';
import Wurzburg1D from './Games/Wurzburg/Wurzburg1/Wurzburg1D';
import Wurzburg2A from './Games/Wurzburg/Wurzburg2/Wurzburg2A';
import Wurzburg2B from './Games/Wurzburg/Wurzburg2/Wurzburg2B';
import Wurzburg2BDomTimings from './Games/Wurzburg/Wurzburg2/Wurzburg2BDomTimings';
import Wurzburg2C1 from './Games/Wurzburg/Wurzburg2/Wurzburg2C1';
import Wurzburg2C2 from './Games/Wurzburg/Wurzburg2/Wurzburg2C2';
import Wurzburg2D1 from './Games/Wurzburg/Wurzburg2/Wurzburg2D1';
import Wurzburg2D2 from './Games/Wurzburg/Wurzburg2/Wurzburg2D2';
import Wurzburg2E from './Games/Wurzburg/Wurzburg2/Wurzburg2E';
import Wurzburg3A from './Games/Wurzburg/Wurzburg3/Wurzburg3A';
import Wurzburg3B from './Games/Wurzburg/Wurzburg3/Wurzburg3B';
import Wurzburg3C from './Games/Wurzburg/Wurzburg3/Wurzburg3C';
import Wurzburg3D from './Games/Wurzburg/Wurzburg3/Wurzburg3D';
import Wurzburg3E from './Games/Wurzburg/Wurzburg3/Wurzburg3E';
import Wurzburg4A from './Games/Wurzburg/Wurzburg4/Wurzburg4A';
import Wurzburg4B from './Games/Wurzburg/Wurzburg4/Wurzburg4B';
import Wurzburg4C from './Games/Wurzburg/Wurzburg4/Wurzburg4C';
import Wurzburg4D from './Games/Wurzburg/Wurzburg4/Wurzburg4D';
import Wurzburg5A from './Games/Wurzburg/Wurzburg5/Wurzburg5A';
import Wurzburg5B from './Games/Wurzburg/Wurzburg5/Wurzburg5B';
import Wurzburg5C from './Games/Wurzburg/Wurzburg5/Wurzburg5C';
import Wurzburg5D from './Games/Wurzburg/Wurzburg5/Wurzburg5D';
// import Wurzburg6A from './Games/Wurzburg/Wurzburg6/Wurzburg6A';
// import Wurzburg6B from './Games/Wurzburg/Wurzburg6/Wurzburg6B';
// import Wurzburg6C from './Games/Wurzburg/Wurzburg6/Wurzburg6C';
// import Wurzburg6D from './Games/Wurzburg/Wurzburg6/Wurzburg6D';
import Wurzburg7A from './Games/Wurzburg/Wurzburg7/Wurzburg7A';
import Wurzburg7B from './Games/Wurzburg/Wurzburg7/Wurzburg7B';
import Wurzburg7Bhelp from './Games/Wurzburg/Wurzburg7/Wurzburg7Bhelp';
import Wurzburg7C from './Games/Wurzburg/Wurzburg7/Wurzburg7C';
import Wurzburg7D from './Games/Wurzburg/Wurzburg7/Wurzburg7D';
import Wurzburg7DTimings from './Games/Wurzburg/Wurzburg7/Wurzburg7DTimings';
import Wurzburg7E from './Games/Wurzburg/Wurzburg7/Wurzburg7E';
import Wurzburg7F from './Games/Wurzburg/Wurzburg7/Wurzburg7F';
import Wurzburg8A from './Games/Wurzburg/Wurzburg8/Wurzburg8A';
import Wurzburg8B from './Games/Wurzburg/Wurzburg8/Wurzburg8B';
import Wurzburg8C from './Games/Wurzburg/Wurzburg8/Wurzburg8C';
import Wurzburg8D from './Games/Wurzburg/Wurzburg8/Wurzburg8D';
import Wurzburg9A from './Games/Wurzburg/Wurzburg9/Wurzburg9A';
import Wurzburg9B from './Games/Wurzburg/Wurzburg9/Wurzburg9B';
import Wurzburg9C from './Games/Wurzburg/Wurzburg9/Wurzburg9C';
import Wurzburg9D from './Games/Wurzburg/Wurzburg9/Wurzburg9D';
import Wurzburg10A from './Games/Wurzburg/Wurzburg10/Wurzburg10A';
import Wurzburg10B from './Games/Wurzburg/Wurzburg10/Wurzburg10B';
import Wurzburg10C from './Games/Wurzburg/Wurzburg10/Wurzburg10C';
import Wurzburg10D from './Games/Wurzburg/Wurzburg10/Wurzburg10D';
import Wurzburg11A from './Games/Wurzburg/Wurzburg11/Wurzburg11A';
import Wurzburg11B from './Games/Wurzburg/Wurzburg11/Wurzburg11B';
import Wurzburg11C from './Games/Wurzburg/Wurzburg11/Wurzburg11C';
import Wurzburg11D from './Games/Wurzburg/Wurzburg11/Wurzburg11D';

function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact={true} path='/' render={() => (
            <Home />
          )}/>
          <Route exact={true} path='/wuerzburg' render={() => (
            <Wurzburg0 />
          )}/>
          <Route exact={true} path='/wuerzburg/start' render={() => (
            <Wurzburg1A />
          )}/>
          <Route exact={true} path='/wuerzburg/bridge' render={() => (
            <Wurzburg1B />
          )}/>
          <Route exact={true} path='/wuerzburg/bridge/clue' render={() => (
            <Wurzburg1C />
          )}/>
          <Route exact={true} path='/wuerzburg/kilianus' render={() => (
            <Wurzburg1D />
          )}/>
          <Route exact={true} path='/wuerzburg/kilianus/dom' render={() => (
            <Wurzburg2A />
          )}/>
          <Route exact={true} path='/wuerzburg/kilianus/dom/openings' render={() => (
            <Wurzburg2B />
          )}/>
          <Route exact={true} path='/wuerzburg/kilianus/dom/timings' render={() => (
            <Wurzburg2BDomTimings />
          )}/>
          <Route exact={true} path='/wuerzburg/kilianus/dom/inside' render={() => (
            <Wurzburg2C1 />
          )}/>
          <Route exact={true} path='/wuerzburg/kilianus/dom/virtuallyinside' render={() => (
            <Wurzburg2C2 />
          )}/>
          <Route exact={true} path='/wuerzburg/kilianus/dom/inside/clue' render={() => (
            <Wurzburg2D1 />
          )}/>
          <Route exact={true} path='/wuerzburg/kilianus/dom/virtuallyinside/clue' render={() => (
            <Wurzburg2D2 />
          )}/>
          <Route exact={true} path='/wuerzburg/domAnswer' render={() => (
            <Wurzburg2E />
          )}/>
          <Route exact={true} path='/wuerzburg/domAnswer/citizens' render={() => (
            <Wurzburg3A />
          )}/>
          <Route exact={true} path='/wuerzburg/citycouncil' render={() => (
            <Wurzburg3B />
          )}/>
          <Route exact={true} path='/wuerzburg/citycouncil/sundial' render={() => (
            <Wurzburg3C />
          )}/>
          <Route exact={true} path='/wuerzburg/citycouncil/sundial/clue' render={() => (
            <Wurzburg3D />
          )}/>
          <Route exact={true} path='/wuerzburg/citycouncil/sundial/clueAnswer' render={() => (
            <Wurzburg3E />
          )}/>
          <Route exact={true} path='/wuerzburg/peasants' render={() => (
            <Wurzburg4A />
          )}/>
          <Route exact={true} path='/wuerzburg/peasants/memorial' render={() => (
            <Wurzburg4B />
          )}/> 
          <Route exact={true} path='/wuerzburg/peasants/memorial/clue' render={() => (
            <Wurzburg4C />
          )}/>
          <Route exact={true} path='/wuerzburg/peasants/memorial/clueAnswer' render={() => (
            <Wurzburg4D />
          )}/>
          <Route exact={true} path='/wuerzburg/julius' render={() => (
            <Wurzburg5A />
          )}/>
          <Route exact={true} path='/wuerzburg/julius/statue' render={() => (
            <Wurzburg5B />
          )}/>
          <Route exact={true} path='/wuerzburg/julius/statue/clue' render={() => (
            <Wurzburg5C />
          )}/>
          <Route exact={true} path='/wuerzburg/julius/statue/clueAnswer' render={() => (
            <Wurzburg5D />
          )}/>
          {/* <Route exact={true} path='/wuerzburg/falkenhous' render={() => (
            <Wurzburg6A />
          )}/>
          <Route exact={true} path='/wuerzburg/falkenhous/taxes' render={() => (
            <Wurzburg6B />
          )}/>
          <Route exact={true} path='/wuerzburg/falkenhous/taxes/clue' render={() => (
            <Wurzburg6C />
          )}/>
          <Route exact={true} path='/wuerzburg/falkenhous/taxes/clueAnswer' render={() => (
            <Wurzburg6D />
          )}/> */}
          <Route exact={true} path='/wuerzburg/residenz' render={() => (
            <Wurzburg7A />
          )}/>
          <Route exact={true} path='/wuerzburg/residenz/intro' render={() => (
            <Wurzburg7B />
          )}/>
          <Route exact={true} path='/wuerzburg/residenz/intro/help' render={() => (
            <Wurzburg7Bhelp />
          )}/>          
          <Route exact={true} path='/wuerzburg/residenz/intro/clue' render={() => (
            <Wurzburg7C />
          )}/>
          <Route exact={true} path='/wuerzburg/residenz/garden/clue' render={() => (
            <Wurzburg7D />
          )}/>
          <Route exact={true} path='/wuerzburg/residenz/garden/timings' render={() => (
            <Wurzburg7DTimings />
          )}/>
          <Route exact={true} path='/wuerzburg/residenz/garden/clueQuestion' render={() => (
            <Wurzburg7E />
          )}/>
          <Route exact={true} path='/wuerzburg/residenz/garden/clueAnswer' render={() => (
            <Wurzburg7F />
          )}/>
          <Route exact={true} path='/wuerzburg/ringpark' render={() => (
            <Wurzburg8A />
          )}/>
          <Route exact={true} path='/wuerzburg/ringpark/intro' render={() => (
            <Wurzburg8B />
          )}/>
          <Route exact={true} path='/wuerzburg/ringpark/intro/clue' render={() => (
            <Wurzburg8C />
          )}/>
          <Route exact={true} path='/wuerzburg/ringpark/intro/clueAnswer' render={() => (
            <Wurzburg8D />
          )}/>
          <Route exact={true} path='/wuerzburg/xrays' render={() => (
            <Wurzburg9A />
          )}/>
          <Route exact={true} path='/wuerzburg/xrays/intro' render={() => (
            <Wurzburg9B />
          )}/>
          <Route exact={true} path='/wuerzburg/xrays/intro/clue' render={() => (
            <Wurzburg9C />
          )}/>
          <Route exact={true} path='/wuerzburg/xrays/intro/clueAnswer' render={() => (
            <Wurzburg9D />
          )}/>
          <Route exact={true} path='/wuerzburg/worldwar' render={() => (
            <Wurzburg10A />
          )}/>
          <Route exact={true} path='/wuerzburg/worldwar/intro' render={() => (
            <Wurzburg10B />
          )}/>
          <Route exact={true} path='/wuerzburg/worldwar/intro/clue' render={() => (
            <Wurzburg10C />
          )}/>
          <Route exact={true} path='/wuerzburg/worldwar/intro/clueAnswer' render={() => (
            <Wurzburg10D />
          )}/>
          <Route exact={true} path='/wuerzburg/currenttimes' render={() => (
            <Wurzburg11A />
          )}/>
          <Route exact={true} path='/wuerzburg/currenttimes/intro' render={() => (
            <Wurzburg11B />
          )}/>
          <Route exact={true} path='/wuerzburg/currenttimes/intro/clue' render={() => (
            <Wurzburg11C />
          )}/>
          <Route exact={true} path='/wuerzburg/currenttimes/intro/clueAnswer' render={() => (
            <Wurzburg11D />
          )}/>
          <Route render={() => (
            <Redirect to="/wuerzburg" />
          )}/>
        </Switch>
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;