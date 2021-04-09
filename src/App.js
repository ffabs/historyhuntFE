
import React, { Component } from 'react';
import './App.css';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Home from './Pages/Home';
import Support from './Pages/Support';
import Thank from './Pages/Thank';
import Wurzburg0 from './Games/Wurzburg/Wurzburg0/Wurzburg0';
import Wurzburg1A from './Games/Wurzburg/Wurzburg1/Wurzburg1A';
import Wurzburg1B from './Games/Wurzburg/Wurzburg1/Wurzburg1B';
import Wurzburg1C from './Games/Wurzburg/Wurzburg1/Wurzburg1C';
import Wurzburg1CHelp from './Games/Wurzburg/Wurzburg1/Wurzburg1CHelp';
import Wurzburg1D from './Games/Wurzburg/Wurzburg1/Wurzburg1D';
import Wurzburg2A from './Games/Wurzburg/Wurzburg2/Wurzburg2A';
import Wurzburg2B from './Games/Wurzburg/Wurzburg2/Wurzburg2B';
import Wurzburg2BDomTimings from './Games/Wurzburg/Wurzburg2/Wurzburg2BDomTimings';
import Wurzburg2C1 from './Games/Wurzburg/Wurzburg2/Wurzburg2C1';
import Wurzburg2C2 from './Games/Wurzburg/Wurzburg2/Wurzburg2C2';
import Wurzburg2D1 from './Games/Wurzburg/Wurzburg2/Wurzburg2D1';
import Wurzburg2D2 from './Games/Wurzburg/Wurzburg2/Wurzburg2D2';
import Wurzburg2DHelp from './Games/Wurzburg/Wurzburg2/Wurzburg2DHelp';
import Wurzburg2E from './Games/Wurzburg/Wurzburg2/Wurzburg2E';
import Wurzburg3A from './Games/Wurzburg/Wurzburg3/Wurzburg3A';
import Wurzburg3B from './Games/Wurzburg/Wurzburg3/Wurzburg3B';
import Wurzburg3C from './Games/Wurzburg/Wurzburg3/Wurzburg3C';
import Wurzburg3D from './Games/Wurzburg/Wurzburg3/Wurzburg3D';
import Wurzburg3DHelp from './Games/Wurzburg/Wurzburg3/Wurzburg3DHelp';
import Wurzburg3E from './Games/Wurzburg/Wurzburg3/Wurzburg3E';
import Wurzburg4A from './Games/Wurzburg/Wurzburg4/Wurzburg4A';
import Wurzburg4AHelp from './Games/Wurzburg/Wurzburg4/Wurzburg4AHelp';
import Wurzburg4B from './Games/Wurzburg/Wurzburg4/Wurzburg4B';
import Wurzburg4C from './Games/Wurzburg/Wurzburg4/Wurzburg4C';
import Wurzburg4CHelp from './Games/Wurzburg/Wurzburg4/Wurzburg4CHelp';
import Wurzburg4D from './Games/Wurzburg/Wurzburg4/Wurzburg4D';
import Wurzburg5A from './Games/Wurzburg/Wurzburg5/Wurzburg5A';
import Wurzburg5B from './Games/Wurzburg/Wurzburg5/Wurzburg5B';
import Wurzburg5C from './Games/Wurzburg/Wurzburg5/Wurzburg5C';
import Wurzburg5CHelp from './Games/Wurzburg/Wurzburg5/Wurzburg5CHelp';
import Wurzburg5D from './Games/Wurzburg/Wurzburg5/Wurzburg5D';
// import Wurzburg6A from './Games/Wurzburg/Wurzburg6/Wurzburg6A';
// import Wurzburg6B from './Games/Wurzburg/Wurzburg6/Wurzburg6B';
// import Wurzburg6C from './Games/Wurzburg/Wurzburg6/Wurzburg6C';
// import Wurzburg6D from './Games/Wurzburg/Wurzburg6/Wurzburg6D';
import Wurzburg7A from './Games/Wurzburg/Wurzburg7/Wurzburg7A';
import Wurzburg7B from './Games/Wurzburg/Wurzburg7/Wurzburg7B';
import Wurzburg7Bhelp from './Games/Wurzburg/Wurzburg7/Wurzburg7Bhelp';
import Wurzburg7C from './Games/Wurzburg/Wurzburg7/Wurzburg7C';
import Wurzburg7CHelp from './Games/Wurzburg/Wurzburg7/Wurzburg7CHelp';
import Wurzburg7D from './Games/Wurzburg/Wurzburg7/Wurzburg7D';
import Wurzburg7DTimings from './Games/Wurzburg/Wurzburg7/Wurzburg7DTimings';
import Wurzburg7E from './Games/Wurzburg/Wurzburg7/Wurzburg7E';
import Wurzburg7F from './Games/Wurzburg/Wurzburg7/Wurzburg7F';
import Wurzburg7FHelp from './Games/Wurzburg/Wurzburg7/Wurzburg7FHelp';
import Wurzburg7G from './Games/Wurzburg/Wurzburg7/Wurzburg7G';
import Wurzburg8A from './Games/Wurzburg/Wurzburg8/Wurzburg8A';
import Wurzburg8B from './Games/Wurzburg/Wurzburg8/Wurzburg8B';
import Wurzburg8C from './Games/Wurzburg/Wurzburg8/Wurzburg8C';
import Wurzburg8CHelp from './Games/Wurzburg/Wurzburg8/Wurzburg8CHelp';
import Wurzburg8D from './Games/Wurzburg/Wurzburg8/Wurzburg8D';
import Wurzburg9A from './Games/Wurzburg/Wurzburg9/Wurzburg9A';
import Wurzburg9B from './Games/Wurzburg/Wurzburg9/Wurzburg9B';
import Wurzburg9C from './Games/Wurzburg/Wurzburg9/Wurzburg9C';
import Wurzburg9CHelp from './Games/Wurzburg/Wurzburg9/Wurzburg9CHelp';
import Wurzburg9D from './Games/Wurzburg/Wurzburg9/Wurzburg9D';
import Wurzburg10A from './Games/Wurzburg/Wurzburg10/Wurzburg10A';
import Wurzburg10B from './Games/Wurzburg/Wurzburg10/Wurzburg10B';
import Wurzburg10C from './Games/Wurzburg/Wurzburg10/Wurzburg10C';
import Wurzburg10CHelp from './Games/Wurzburg/Wurzburg10/Wurzburg10CHelp';
import Wurzburg10D from './Games/Wurzburg/Wurzburg10/Wurzburg10D';
import Wurzburg11A from './Games/Wurzburg/Wurzburg11/Wurzburg11A';
import Wurzburg11B from './Games/Wurzburg/Wurzburg11/Wurzburg11B';
import Wurzburg11C from './Games/Wurzburg/Wurzburg11/Wurzburg11C';
import Wurzburg11CHelp from './Games/Wurzburg/Wurzburg11/Wurzburg11CHelp';
import Wurzburg11D from './Games/Wurzburg/Wurzburg11/Wurzburg11D';

class App extends Component {
  
  constructor (props) {
    super(props);   
    this.state = {
      gamemenu: "false"
    }
    this.handleGamemenu = this.handleGamemenu.bind(this);
  }

  handleGamemenu(currentState) {
    this.setState({
      gamemenu: currentState
    });
  }

  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <Switch>
            <Route exact={true} path='/' render={() => (
              <Home />
            )}/>
            <Route exact={true} path='/support-us' render={() => (
              <Support />
            )}/>  
            <Route exact={true} path='/thank-you' render={() => (
              <Thank />
            )}/>
            <Route exact={true} path='/wuerzburg' render={() => (
              <Wurzburg0 gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/start' render={() => (
              <Wurzburg1A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/bridge' render={() => (
              <Wurzburg1B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/bridge/clue' render={() => (
              <Wurzburg1C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/bridge/help' render={() => (
              <Wurzburg1CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus' render={() => (
              <Wurzburg1D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom' render={() => (
              <Wurzburg2A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom/openings' render={() => (
              <Wurzburg2B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom/timings' render={() => (
              <Wurzburg2BDomTimings gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom/inside' render={() => (
              <Wurzburg2C1 gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom/virtuallyinside' render={() => (
              <Wurzburg2C2 gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom/inside/clue' render={() => (
              <Wurzburg2D1 gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom/virtuallyinside/clue' render={() => (
              <Wurzburg2D2 gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom/help' render={() => (
              <Wurzburg2DHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/domAnswer' render={() => (
              <Wurzburg2E gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/domAnswer/citizens' render={() => (
              <Wurzburg3A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/citycouncil' render={() => (
              <Wurzburg3B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/citycouncil/sundial' render={() => (
              <Wurzburg3C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/citycouncil/sundial/clue' render={() => (
              <Wurzburg3D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>/wuerzburg/citycouncil/help
            <Route exact={true} path='/wuerzburg/citycouncil/help' render={() => (
              <Wurzburg3DHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/citycouncil/sundial/clueAnswer' render={() => (
              <Wurzburg3E gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/peasants' render={() => (
              <Wurzburg4A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/peasants/help' render={() => (
              <Wurzburg4AHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/peasants/memorial' render={() => (
              <Wurzburg4B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/> 
            <Route exact={true} path='/wuerzburg/peasants/memorial/clue' render={() => (
              <Wurzburg4C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/peasants/help' render={() => (
              <Wurzburg4CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/peasants/memorial/clueAnswer' render={() => (
              <Wurzburg4D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/julius' render={() => (
              <Wurzburg5A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/julius/statue' render={() => (
              <Wurzburg5B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/julius/statue/clue' render={() => (
              <Wurzburg5C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/julius/help' render={() => (
              <Wurzburg5CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/julius/statue/clueAnswer' render={() => (
              <Wurzburg5D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
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
              <Wurzburg7A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz/intro' render={() => (
              <Wurzburg7B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz/intro/help' render={() => (
              <Wurzburg7Bhelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>          
            <Route exact={true} path='/wuerzburg/residenz/intro/clue' render={() => (
              <Wurzburg7C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>         
            <Route exact={true} path='/wuerzburg/residenz/help' render={() => (
              <Wurzburg7CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>            
            <Route exact={true} path='/wuerzburg/residenz/garden/clue' render={() => (
              <Wurzburg7D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz/garden/timings' render={() => (
              <Wurzburg7DTimings gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz/gate/intro' render={() => (
              <Wurzburg7E gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz/garden/clueQuestion' render={() => (
              <Wurzburg7F gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz/garden/help' render={() => (
              <Wurzburg7FHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz/garden/clueAnswer' render={() => (
              <Wurzburg7G gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/ringpark' render={() => (
              <Wurzburg8A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/ringpark/intro' render={() => (
              <Wurzburg8B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/ringpark/intro/clue' render={() => (
              <Wurzburg8C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/ringpark/help' render={() => (
              <Wurzburg8CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/ringpark/intro/clueAnswer' render={() => (
              <Wurzburg8D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/xrays' render={() => (
              <Wurzburg9A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/xrays/intro' render={() => (
              <Wurzburg9B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/xrays/intro/clue' render={() => (
              <Wurzburg9C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/xrays/help' render={() => (
              <Wurzburg9CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/xrays/intro/clueAnswer' render={() => (
              <Wurzburg9D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/worldwar' render={() => (
              <Wurzburg10A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/worldwar/intro' render={() => (
              <Wurzburg10B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/worldwar/intro/clue' render={() => (
              <Wurzburg10C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/worldwar/help' render={() => (
              <Wurzburg10CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/worldwar/intro/clueAnswer' render={() => (
              <Wurzburg10D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/currenttimes' render={() => (
              <Wurzburg11A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/currenttimes/intro' render={() => (
              <Wurzburg11B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/currenttimes/intro/clue' render={() => (
              <Wurzburg11C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/currenttimes/help' render={() => (
              <Wurzburg11CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/currenttimes/intro/clueAnswer' render={() => (
              <Wurzburg11D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route render={() => (
              <Redirect to="/wuerzburg" />
            )}/>
          </Switch>
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default App;