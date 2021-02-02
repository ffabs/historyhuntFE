import './App.css';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Home from './Games/Home';
import Wurzburg0 from './Games/Wurzburg/Wurzburg0/Wurzburg0';
import Wurzburg1A from './Games/Wurzburg/Wurzburg1/Wurzburg1A';
import Wurzburg1B from './Games/Wurzburg/Wurzburg1/Wurzburg1B';
import Wurzburg1C from './Games/Wurzburg/Wurzburg1/Wurzburg1C';
import Wurzburg1D from './Games/Wurzburg/Wurzburg1/Wurzburg1D';
import Wurzburg2A from './Games/Wurzburg/Wurzburg2/Wurzburg2A';
import Wurzburg2B from './Games/Wurzburg/Wurzburg2/Wurzburg2B';
import Wurzburg2C1 from './Games/Wurzburg/Wurzburg2/Wurzburg2C1';
import Wurzburg2C2 from './Games/Wurzburg/Wurzburg2/Wurzburg2C2';
import Wurzburg2D1 from './Games/Wurzburg/Wurzburg2/Wurzburg2D1';
import Wurzburg2D2 from './Games/Wurzburg/Wurzburg2/Wurzburg2D2';
import Wurzburg2E from './Games/Wurzburg/Wurzburg2/Wurzburg2E';
import Wurzburg3A from './Games/Wurzburg/Wurzburg3/Wurzburg3A';
import Wurzburg3B from './Games/Wurzburg/Wurzburg3/Wurzburg3B';
import Wurzburg3C from './Games/Wurzburg/Wurzburg3/Wurzburg3C';
import Wurzburg4A from './Games/Wurzburg/Wurzburg4/Wurzburg4A';

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
          <Route exact={true} path='/wuerzburg/peasants' render={() => (
            <Wurzburg4A />
          )}/>
          <Route render={() => (
            <Redirect to="/" />
          )}/>
        </Switch>
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;