import React, { Component } from 'react';
import './App.css';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import Home from './Pages/PagesEN/Home';
import Support from './Pages/PagesEN/Support';
import Thank from './Pages/PagesEN/Thank';

import HomeDE from './Pages/PagesDE/Home';
import SupportDE from './Pages/PagesDE/Support';
import ThankDE from './Pages/PagesDE/Thank';


import Wurzburg0 from './Games/Wurzburg/WurzburgEN/Wurzburg0/Wurzburg0';
import Wurzburg1A from './Games/Wurzburg/WurzburgEN/Wurzburg1/Wurzburg1A';
import Wurzburg1B from './Games/Wurzburg/WurzburgEN/Wurzburg1/Wurzburg1B';
import Wurzburg1C from './Games/Wurzburg/WurzburgEN/Wurzburg1/Wurzburg1C';
import Wurzburg1CHelp from './Games/Wurzburg/WurzburgEN/Wurzburg1/Wurzburg1CHelp';
import Wurzburg1D from './Games/Wurzburg/WurzburgEN/Wurzburg1/Wurzburg1D';
import Wurzburg2A from './Games/Wurzburg/WurzburgEN/Wurzburg2/Wurzburg2A';
import Wurzburg2B from './Games/Wurzburg/WurzburgEN/Wurzburg2/Wurzburg2B';
import Wurzburg2BDomTimings from './Games/Wurzburg/WurzburgEN/Wurzburg2/Wurzburg2BDomTimings';
import Wurzburg2C1 from './Games/Wurzburg/WurzburgEN/Wurzburg2/Wurzburg2C1';
import Wurzburg2C2 from './Games/Wurzburg/WurzburgEN/Wurzburg2/Wurzburg2C2';
import Wurzburg2D1 from './Games/Wurzburg/WurzburgEN/Wurzburg2/Wurzburg2D1';
import Wurzburg2D2 from './Games/Wurzburg/WurzburgEN/Wurzburg2/Wurzburg2D2';
import Wurzburg2DHelp from './Games/Wurzburg/WurzburgEN/Wurzburg2/Wurzburg2DHelp';
import Wurzburg2E from './Games/Wurzburg/WurzburgEN/Wurzburg2/Wurzburg2E';
import Wurzburg3A from './Games/Wurzburg/WurzburgEN/Wurzburg3/Wurzburg3A';
import Wurzburg3B from './Games/Wurzburg/WurzburgEN/Wurzburg3/Wurzburg3B';
import Wurzburg3C from './Games/Wurzburg/WurzburgEN/Wurzburg3/Wurzburg3C';
import Wurzburg3D from './Games/Wurzburg/WurzburgEN/Wurzburg3/Wurzburg3D';
import Wurzburg3DHelp from './Games/Wurzburg/WurzburgEN/Wurzburg3/Wurzburg3DHelp';
import Wurzburg3E from './Games/Wurzburg/WurzburgEN/Wurzburg3/Wurzburg3E';
import Wurzburg4A from './Games/Wurzburg/WurzburgEN/Wurzburg4/Wurzburg4A';
import Wurzburg4AHelp from './Games/Wurzburg/WurzburgEN/Wurzburg4/Wurzburg4AHelp';
import Wurzburg4B from './Games/Wurzburg/WurzburgEN/Wurzburg4/Wurzburg4B';
import Wurzburg4C from './Games/Wurzburg/WurzburgEN/Wurzburg4/Wurzburg4C';
import Wurzburg4CHelp from './Games/Wurzburg/WurzburgEN/Wurzburg4/Wurzburg4CHelp';
import Wurzburg4D from './Games/Wurzburg/WurzburgEN/Wurzburg4/Wurzburg4D';
import Wurzburg5A from './Games/Wurzburg/WurzburgEN/Wurzburg5/Wurzburg5A';
import Wurzburg5B from './Games/Wurzburg/WurzburgEN/Wurzburg5/Wurzburg5B';
import Wurzburg5C from './Games/Wurzburg/WurzburgEN/Wurzburg5/Wurzburg5C';
import Wurzburg5CHelp from './Games/Wurzburg/WurzburgEN/Wurzburg5/Wurzburg5CHelp';
import Wurzburg5D from './Games/Wurzburg/WurzburgEN/Wurzburg5/Wurzburg5D';
import Wurzburg7A from './Games/Wurzburg/WurzburgEN/Wurzburg7/Wurzburg7A';
import Wurzburg7B from './Games/Wurzburg/WurzburgEN/Wurzburg7/Wurzburg7B';
import Wurzburg7Bhelp from './Games/Wurzburg/WurzburgEN/Wurzburg7/Wurzburg7Bhelp';
import Wurzburg7C from './Games/Wurzburg/WurzburgEN/Wurzburg7/Wurzburg7C';
import Wurzburg7CHelp from './Games/Wurzburg/WurzburgEN/Wurzburg7/Wurzburg7CHelp';
import Wurzburg7D from './Games/Wurzburg/WurzburgEN/Wurzburg7/Wurzburg7D';
import Wurzburg7DTimings from './Games/Wurzburg/WurzburgEN/Wurzburg7/Wurzburg7DTimings';
import Wurzburg7E from './Games/Wurzburg/WurzburgEN/Wurzburg7/Wurzburg7E';
import Wurzburg7F from './Games/Wurzburg/WurzburgEN/Wurzburg7/Wurzburg7F';
import Wurzburg7FHelp from './Games/Wurzburg/WurzburgEN/Wurzburg7/Wurzburg7FHelp';
import Wurzburg7G from './Games/Wurzburg/WurzburgEN/Wurzburg7/Wurzburg7G';
import Wurzburg8A from './Games/Wurzburg/WurzburgEN/Wurzburg8/Wurzburg8A';
import Wurzburg8B from './Games/Wurzburg/WurzburgEN/Wurzburg8/Wurzburg8B';
import Wurzburg8C from './Games/Wurzburg/WurzburgEN/Wurzburg8/Wurzburg8C';
import Wurzburg8CHelp from './Games/Wurzburg/WurzburgEN/Wurzburg8/Wurzburg8CHelp';
import Wurzburg8D from './Games/Wurzburg/WurzburgEN/Wurzburg8/Wurzburg8D';
import Wurzburg9A from './Games/Wurzburg/WurzburgEN/Wurzburg9/Wurzburg9A';
import Wurzburg9B from './Games/Wurzburg/WurzburgEN/Wurzburg9/Wurzburg9B';
import Wurzburg9C from './Games/Wurzburg/WurzburgEN/Wurzburg9/Wurzburg9C';
import Wurzburg9CHelp from './Games/Wurzburg/WurzburgEN/Wurzburg9/Wurzburg9CHelp';
import Wurzburg9D from './Games/Wurzburg/WurzburgEN/Wurzburg9/Wurzburg9D';
import Wurzburg10A from './Games/Wurzburg/WurzburgEN/Wurzburg10/Wurzburg10A';
import Wurzburg10B from './Games/Wurzburg/WurzburgEN/Wurzburg10/Wurzburg10B';
import Wurzburg10C from './Games/Wurzburg/WurzburgEN/Wurzburg10/Wurzburg10C';
import Wurzburg10CHelp from './Games/Wurzburg/WurzburgEN/Wurzburg10/Wurzburg10CHelp';
import Wurzburg10D from './Games/Wurzburg/WurzburgEN/Wurzburg10/Wurzburg10D';
import Wurzburg11A from './Games/Wurzburg/WurzburgEN/Wurzburg11/Wurzburg11A';
import Wurzburg11B from './Games/Wurzburg/WurzburgEN/Wurzburg11/Wurzburg11B';
import Wurzburg11C from './Games/Wurzburg/WurzburgEN/Wurzburg11/Wurzburg11C';
import Wurzburg11CHelp from './Games/Wurzburg/WurzburgEN/Wurzburg11/Wurzburg11CHelp';
import Wurzburg11D from './Games/Wurzburg/WurzburgEN/Wurzburg11/Wurzburg11D';

import Wurzburg0DE from './Games/Wurzburg/WurzburgDE/Wurzburg0/Wurzburg0';
import Wurzburg1ADE from './Games/Wurzburg/WurzburgDE/Wurzburg1/Wurzburg1A';
import Wurzburg1BDE from './Games/Wurzburg/WurzburgDE/Wurzburg1/Wurzburg1B';
import Wurzburg1CDE from './Games/Wurzburg/WurzburgDE/Wurzburg1/Wurzburg1C';
import Wurzburg1CHelpDE from './Games/Wurzburg/WurzburgDE/Wurzburg1/Wurzburg1CHelp';
import Wurzburg1DDE from './Games/Wurzburg/WurzburgDE/Wurzburg1/Wurzburg1D';
import Wurzburg2ADE from './Games/Wurzburg/WurzburgDE/Wurzburg2/Wurzburg2A';
import Wurzburg2BDE from './Games/Wurzburg/WurzburgDE/Wurzburg2/Wurzburg2B';
import Wurzburg2BDomTimingsDE from './Games/Wurzburg/WurzburgDE/Wurzburg2/Wurzburg2BDomTimings';
import Wurzburg2C1DE from './Games/Wurzburg/WurzburgDE/Wurzburg2/Wurzburg2C1';
import Wurzburg2C2DE from './Games/Wurzburg/WurzburgDE/Wurzburg2/Wurzburg2C2';
import Wurzburg2D1DE from './Games/Wurzburg/WurzburgDE/Wurzburg2/Wurzburg2D1';
import Wurzburg2D2DE from './Games/Wurzburg/WurzburgDE/Wurzburg2/Wurzburg2D2';
import Wurzburg2DHelpDE from './Games/Wurzburg/WurzburgDE/Wurzburg2/Wurzburg2DHelp';
import Wurzburg2EDE from './Games/Wurzburg/WurzburgDE/Wurzburg2/Wurzburg2E';
import Wurzburg3ADE from './Games/Wurzburg/WurzburgDE/Wurzburg3/Wurzburg3A';
import Wurzburg3BDE from './Games/Wurzburg/WurzburgDE/Wurzburg3/Wurzburg3B';
import Wurzburg3CDE from './Games/Wurzburg/WurzburgDE/Wurzburg3/Wurzburg3C';
import Wurzburg3DDE from './Games/Wurzburg/WurzburgDE/Wurzburg3/Wurzburg3D';
import Wurzburg3DHelpDE from './Games/Wurzburg/WurzburgDE/Wurzburg3/Wurzburg3DHelp';
import Wurzburg3EDE from './Games/Wurzburg/WurzburgDE/Wurzburg3/Wurzburg3E';
import Wurzburg4ADE from './Games/Wurzburg/WurzburgDE/Wurzburg4/Wurzburg4A';
import Wurzburg4AHelpDE from './Games/Wurzburg/WurzburgDE/Wurzburg4/Wurzburg4AHelp';
import Wurzburg4BDE from './Games/Wurzburg/WurzburgDE/Wurzburg4/Wurzburg4B';
import Wurzburg4CDE from './Games/Wurzburg/WurzburgDE/Wurzburg4/Wurzburg4C';
import Wurzburg4CHelpDE from './Games/Wurzburg/WurzburgDE/Wurzburg4/Wurzburg4CHelp';
import Wurzburg4DDE from './Games/Wurzburg/WurzburgDE/Wurzburg4/Wurzburg4D';
import Wurzburg5ADE from './Games/Wurzburg/WurzburgDE/Wurzburg5/Wurzburg5A';
import Wurzburg5BDE from './Games/Wurzburg/WurzburgDE/Wurzburg5/Wurzburg5B';
import Wurzburg5CDE from './Games/Wurzburg/WurzburgDE/Wurzburg5/Wurzburg5C';
import Wurzburg5CHelpDE from './Games/Wurzburg/WurzburgDE/Wurzburg5/Wurzburg5CHelp';
import Wurzburg5DDE from './Games/Wurzburg/WurzburgDE/Wurzburg5/Wurzburg5D';
import Wurzburg7ADE from './Games/Wurzburg/WurzburgDE/Wurzburg7/Wurzburg7A';
import Wurzburg7BDE from './Games/Wurzburg/WurzburgDE/Wurzburg7/Wurzburg7B';
import Wurzburg7BhelpDE from './Games/Wurzburg/WurzburgDE/Wurzburg7/Wurzburg7Bhelp';
import Wurzburg7CDE from './Games/Wurzburg/WurzburgDE/Wurzburg7/Wurzburg7C';
import Wurzburg7CHelpDE from './Games/Wurzburg/WurzburgDE/Wurzburg7/Wurzburg7CHelp';
import Wurzburg7DDE from './Games/Wurzburg/WurzburgDE/Wurzburg7/Wurzburg7D';
import Wurzburg7DTimingsDE from './Games/Wurzburg/WurzburgDE/Wurzburg7/Wurzburg7DTimings';
import Wurzburg7EDE from './Games/Wurzburg/WurzburgDE/Wurzburg7/Wurzburg7E';
import Wurzburg7FDE from './Games/Wurzburg/WurzburgDE/Wurzburg7/Wurzburg7F';
import Wurzburg7FHelpDE from './Games/Wurzburg/WurzburgDE/Wurzburg7/Wurzburg7FHelp';
import Wurzburg7GDE from './Games/Wurzburg/WurzburgDE/Wurzburg7/Wurzburg7G';
import Wurzburg8ADE from './Games/Wurzburg/WurzburgDE/Wurzburg8/Wurzburg8A';
import Wurzburg8BDE from './Games/Wurzburg/WurzburgDE/Wurzburg8/Wurzburg8B';
import Wurzburg8CDE from './Games/Wurzburg/WurzburgDE/Wurzburg8/Wurzburg8C';
import Wurzburg8CHelpDE from './Games/Wurzburg/WurzburgDE/Wurzburg8/Wurzburg8CHelp';
import Wurzburg8DDE from './Games/Wurzburg/WurzburgDE/Wurzburg8/Wurzburg8D';
import Wurzburg9ADE from './Games/Wurzburg/WurzburgDE/Wurzburg9/Wurzburg9A';
import Wurzburg9BDE from './Games/Wurzburg/WurzburgDE/Wurzburg9/Wurzburg9B';
import Wurzburg9CDE from './Games/Wurzburg/WurzburgDE/Wurzburg9/Wurzburg9C';
import Wurzburg9CHelpDE from './Games/Wurzburg/WurzburgDE/Wurzburg9/Wurzburg9CHelp';
import Wurzburg9DDE from './Games/Wurzburg/WurzburgDE/Wurzburg9/Wurzburg9D';
import Wurzburg10ADE from './Games/Wurzburg/WurzburgDE/Wurzburg10/Wurzburg10A';
import Wurzburg10BDE from './Games/Wurzburg/WurzburgDE/Wurzburg10/Wurzburg10B';
import Wurzburg10CDE from './Games/Wurzburg/WurzburgDE/Wurzburg10/Wurzburg10C';
import Wurzburg10CHelpDE from './Games/Wurzburg/WurzburgDE/Wurzburg10/Wurzburg10CHelp';
import Wurzburg10DDE from './Games/Wurzburg/WurzburgDE/Wurzburg10/Wurzburg10D';
import Wurzburg11ADE from './Games/Wurzburg/WurzburgDE/Wurzburg11/Wurzburg11A';
import Wurzburg11BDE from './Games/Wurzburg/WurzburgDE/Wurzburg11/Wurzburg11B';
import Wurzburg11CDE from './Games/Wurzburg/WurzburgDE/Wurzburg11/Wurzburg11C';
import Wurzburg11CHelpDE from './Games/Wurzburg/WurzburgDE/Wurzburg11/Wurzburg11CHelp';
import Wurzburg11DDE from './Games/Wurzburg/WurzburgDE/Wurzburg11/Wurzburg11D';


import Munich1A from './Games/Munich/MunichEN/Munich1/Munich1A';
import Munich1B from './Games/Munich/MunichEN/Munich1/Munich1B';
import Munich1BHelp from './Games/Munich/MunichEN/Munich1/Munich1BHelp';
import Munich1C from './Games/Munich/MunichEN/Munich1/Munich1C';
import Munich1CHelp from './Games/Munich/MunichEN/Munich1/Munich1CHelp';
import Munich1D from './Games/Munich/MunichEN/Munich1/Munich1D';
import Munich2A from './Games/Munich/MunichEN/Munich2/Munich2A';
import Munich2B from './Games/Munich/MunichEN/Munich2/Munich2B';
import Munich2C from './Games/Munich/MunichEN/Munich2/Munich2C';
import Munich2CHelp from './Games/Munich/MunichEN/Munich2/Munich2CHelp';
import Munich2D from './Games/Munich/MunichEN/Munich2/Munich2D';
import Munich3A from './Games/Munich/MunichEN/Munich3/Munich3A';
import Munich3B from './Games/Munich/MunichEN/Munich3/Munich3B';
import Munich3C from './Games/Munich/MunichEN/Munich3/Munich3C';
import Munich3CHelp from './Games/Munich/MunichEN/Munich3/Munich3CHelp';
import Munich3D from './Games/Munich/MunichEN/Munich3/Munich3D';
import Munich4A from './Games/Munich/MunichEN/Munich4/Munich4A';
import Munich4B from './Games/Munich/MunichEN/Munich4/Munich4B';
import Munich4C from './Games/Munich/MunichEN/Munich4/Munich4C';
import Munich4CHelp from './Games/Munich/MunichEN/Munich4/Munich4CHelp';
import Munich4D from './Games/Munich/MunichEN/Munich4/Munich4D';
import Munich5A from './Games/Munich/MunichEN/Munich5/Munich5A';
import Munich5B from './Games/Munich/MunichEN/Munich5/Munich5B';
import Munich5C from './Games/Munich/MunichEN/Munich5/Munich5C';
import Munich5CHelp from './Games/Munich/MunichEN/Munich5/Munich5CHelp';
import Munich5D from './Games/Munich/MunichEN/Munich5/Munich5D';
import Munich6A from './Games/Munich/MunichEN/Munich6/Munich6A';
import Munich6B from './Games/Munich/MunichEN/Munich6/Munich6B';
import Munich6C from './Games/Munich/MunichEN/Munich6/Munich6C';
import Munich6CHelp from './Games/Munich/MunichEN/Munich6/Munich6CHelp';
import Munich6D from './Games/Munich/MunichEN/Munich6/Munich6D';
import Munich7A from './Games/Munich/MunichEN/Munich7/Munich7A';
import Munich7B from './Games/Munich/MunichEN/Munich7/Munich7B';
import Munich7C from './Games/Munich/MunichEN/Munich7/Munich7C';
import Munich7CHelp from './Games/Munich/MunichEN/Munich7/Munich7CHelp';
import Munich7D from './Games/Munich/MunichEN/Munich7/Munich7D';
import Munich8A from './Games/Munich/MunichEN/Munich8/Munich8A';
import Munich8B from './Games/Munich/MunichEN/Munich8/Munich8B';
import Munich8C from './Games/Munich/MunichEN/Munich8/Munich8C';
import Munich8CHelp from './Games/Munich/MunichEN/Munich8/Munich8CHelp';
import Munich8D from './Games/Munich/MunichEN/Munich8/Munich8D';
import Munich9A from './Games/Munich/MunichEN/Munich9/Munich9A';
import Munich9B from './Games/Munich/MunichEN/Munich9/Munich9B';
import Munich9C from './Games/Munich/MunichEN/Munich9/Munich9C';
import Munich9CHelp from './Games/Munich/MunichEN/Munich9/Munich9CHelp';
import Munich9D from './Games/Munich/MunichEN/Munich9/Munich9D';
import Munich10A from './Games/Munich/MunichEN/Munich10/Munich10A';
import Munich10B from './Games/Munich/MunichEN/Munich10/Munich10B';
import Munich10C from './Games/Munich/MunichEN/Munich10/Munich10C';
import Munich10CHelp from './Games/Munich/MunichEN/Munich10/Munich10CHelp';
import Munich10D from './Games/Munich/MunichEN/Munich10/Munich10D';


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
            <Route exact={true} path='/DE' render={() => (
              <HomeDE />
            )}/>
            <Route exact={true} path='/support-us' render={() => (
              <Support />
            )}/>  
            <Route exact={true} path='/DE/support-us' render={() => (
              <SupportDE />
            )}/>  
            <Route exact={true} path='/thank-you' render={() => (
              <Thank />
            )}/>
            <Route exact={true} path='/DE/thank-you' render={() => (
              <ThankDE />
            )}/>


            <Route exact={true} path='/wuerzburg' render={() => (
              <Wurzburg0 gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg' render={() => (
              <Wurzburg0DE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/start' render={() => (
              <Wurzburg1A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/start' render={() => (
              <Wurzburg1ADE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/bridge' render={() => (
              <Wurzburg1B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/bridge' render={() => (
              <Wurzburg1BDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/bridge/clue' render={() => (
              <Wurzburg1C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/bridge/clue' render={() => (
              <Wurzburg1CDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/bridge/help' render={() => (
              <Wurzburg1CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/bridge/help' render={() => (
              <Wurzburg1CHelpDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus' render={() => (
              <Wurzburg1D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/kilianus' render={() => (
              <Wurzburg1DDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom' render={() => (
              <Wurzburg2A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/kilianus/dom' render={() => (
              <Wurzburg2ADE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom/openings' render={() => (
              <Wurzburg2B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/kilianus/dom/openings' render={() => (
              <Wurzburg2BDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom/timings' render={() => (
              <Wurzburg2BDomTimings gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/kilianus/dom/timings' render={() => (
              <Wurzburg2BDomTimingsDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom/inside' render={() => (
              <Wurzburg2C1 gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/kilianus/dom/inside' render={() => (
              <Wurzburg2C1DE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom/virtuallyinside' render={() => (
              <Wurzburg2C2 gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/kilianus/dom/virtuallyinside' render={() => (
              <Wurzburg2C2DE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom/inside/clue' render={() => (
              <Wurzburg2D1 gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/kilianus/dom/inside/clue' render={() => (
              <Wurzburg2D1DE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom/virtuallyinside/clue' render={() => (
              <Wurzburg2D2 gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/kilianus/dom/virtuallyinside/clue' render={() => (
              <Wurzburg2D2DE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/kilianus/dom/help' render={() => (
              <Wurzburg2DHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/kilianus/dom/help' render={() => (
              <Wurzburg2DHelpDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/domAnswer' render={() => (
              <Wurzburg2E gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/domAnswer' render={() => (
              <Wurzburg2EDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/domAnswer/citizens' render={() => (
              <Wurzburg3A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/domAnswer/citizens' render={() => (
              <Wurzburg3ADE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/citycouncil' render={() => (
              <Wurzburg3B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/citycouncil' render={() => (
              <Wurzburg3BDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/citycouncil/sundial' render={() => (
              <Wurzburg3C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/citycouncil/sundial' render={() => (
              <Wurzburg3CDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/citycouncil/sundial/clue' render={() => (
              <Wurzburg3D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/citycouncil/sundial/clue' render={() => (
              <Wurzburg3DDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/citycouncil/help' render={() => (
              <Wurzburg3DHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/citycouncil/help' render={() => (
              <Wurzburg3DHelpDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/citycouncil/sundial/clueAnswer' render={() => (
              <Wurzburg3E gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/citycouncil/sundial/clueAnswer' render={() => (
              <Wurzburg3EDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/peasants' render={() => (
              <Wurzburg4A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/peasants' render={() => (
              <Wurzburg4ADE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/peasants/directions' render={() => (
              <Wurzburg4AHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/peasants/directions' render={() => (
              <Wurzburg4AHelpDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/peasants/memorial' render={() => (
              <Wurzburg4B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/> 
            <Route exact={true} path='/DE/wuerzburg/peasants/memorial' render={() => (
              <Wurzburg4BDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/> 
            <Route exact={true} path='/wuerzburg/peasants/memorial/clue' render={() => (
              <Wurzburg4C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/> 
            <Route exact={true} path='/DE/wuerzburg/peasants/memorial/clue' render={() => (
              <Wurzburg4CDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/peasants/help' render={() => (
              <Wurzburg4CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/peasants/help' render={() => (
              <Wurzburg4CHelpDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/peasants/memorial/clueAnswer' render={() => (
              <Wurzburg4D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/peasants/memorial/clueAnswer' render={() => (
              <Wurzburg4DDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/julius' render={() => (
              <Wurzburg5A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/julius' render={() => (
              <Wurzburg5ADE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/julius/statue' render={() => (
              <Wurzburg5B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/julius/statue' render={() => (
              <Wurzburg5BDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/julius/statue/clue' render={() => (
              <Wurzburg5C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/julius/statue/clue' render={() => (
              <Wurzburg5CDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/julius/help' render={() => (
              <Wurzburg5CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/julius/help' render={() => (
              <Wurzburg5CHelpDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/julius/statue/clueAnswer' render={() => (
              <Wurzburg5D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/julius/statue/clueAnswer' render={() => (
              <Wurzburg5DDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz' render={() => (
              <Wurzburg7A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/residenz' render={() => (
              <Wurzburg7ADE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz/intro' render={() => (
              <Wurzburg7B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/residenz/intro' render={() => (
              <Wurzburg7BDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz/intro/help' render={() => (
              <Wurzburg7Bhelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>  
            <Route exact={true} path='/DE/wuerzburg/residenz/intro/help' render={() => (
              <Wurzburg7BhelpDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>         
            <Route exact={true} path='/wuerzburg/residenz/intro/clue' render={() => (
              <Wurzburg7C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>            
            <Route exact={true} path='/DE/wuerzburg/residenz/intro/clue' render={() => (
              <Wurzburg7CDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>       
            <Route exact={true} path='/wuerzburg/residenz/help' render={() => (
              <Wurzburg7CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>         
            <Route exact={true} path='/DE/wuerzburg/residenz/help' render={() => (
              <Wurzburg7CHelpDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>           
            <Route exact={true} path='/wuerzburg/residenz/garden/clue' render={() => (
              <Wurzburg7D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>          
            <Route exact={true} path='/DE/wuerzburg/residenz/garden/clue' render={() => (
              <Wurzburg7DDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz/garden/timings' render={() => (
              <Wurzburg7DTimings gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/residenz/garden/timings' render={() => (
              <Wurzburg7DTimingsDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz/gate/intro' render={() => (
              <Wurzburg7E gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/residenz/gate/intro' render={() => (
              <Wurzburg7EDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz/garden/clueQuestion' render={() => (
              <Wurzburg7F gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/residenz/garden/clueQuestion' render={() => (
              <Wurzburg7FDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz/garden/help' render={() => (
              <Wurzburg7FHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/residenz/garden/help' render={() => (
              <Wurzburg7FHelpDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/residenz/garden/clueAnswer' render={() => (
              <Wurzburg7G gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/residenz/garden/clueAnswer' render={() => (
              <Wurzburg7GDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/ringpark' render={() => (
              <Wurzburg8A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/ringpark' render={() => (
              <Wurzburg8ADE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/ringpark/intro' render={() => (
              <Wurzburg8B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/ringpark/intro' render={() => (
              <Wurzburg8BDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/ringpark/intro/clue' render={() => (
              <Wurzburg8C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/ringpark/intro/clue' render={() => (
              <Wurzburg8CDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/ringpark/help' render={() => (
              <Wurzburg8CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/ringpark/help' render={() => (
              <Wurzburg8CHelpDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/ringpark/intro/clueAnswer' render={() => (
              <Wurzburg8D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/ringpark/intro/clueAnswer' render={() => (
              <Wurzburg8DDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/xrays' render={() => (
              <Wurzburg9A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/xrays' render={() => (
              <Wurzburg9ADE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/xrays/intro' render={() => (
              <Wurzburg9B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/xrays/intro' render={() => (
              <Wurzburg9BDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/xrays/intro/clue' render={() => (
              <Wurzburg9C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/xrays/intro/clue' render={() => (
              <Wurzburg9CDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/xrays/help' render={() => (
              <Wurzburg9CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/xrays/help' render={() => (
              <Wurzburg9CHelpDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/xrays/intro/clueAnswer' render={() => (
              <Wurzburg9D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/xrays/intro/clueAnswer' render={() => (
              <Wurzburg9DDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/worldwar' render={() => (
              <Wurzburg10A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/worldwar' render={() => (
              <Wurzburg10ADE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/worldwar/intro' render={() => (
              <Wurzburg10B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/worldwar/intro' render={() => (
              <Wurzburg10BDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/worldwar/intro/clue' render={() => (
              <Wurzburg10C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/worldwar/intro/clue' render={() => (
              <Wurzburg10CDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/worldwar/help' render={() => (
              <Wurzburg10CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/worldwar/help' render={() => (
              <Wurzburg10CHelpDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/worldwar/intro/clueAnswer' render={() => (
              <Wurzburg10D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/worldwar/intro/clueAnswer' render={() => (
              <Wurzburg10DDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/currenttimes' render={() => (
              <Wurzburg11A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/currenttimes' render={() => (
              <Wurzburg11ADE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/currenttimes/intro' render={() => (
              <Wurzburg11B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/currenttimes/intro' render={() => (
              <Wurzburg11BDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/currenttimes/intro/clue' render={() => (
              <Wurzburg11C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/currenttimes/intro/clue' render={() => (
              <Wurzburg11CDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/currenttimes/help' render={() => (
              <Wurzburg11CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/currenttimes/help' render={() => (
              <Wurzburg11CHelpDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/wuerzburg/currenttimes/intro/clueAnswer' render={() => (
              <Wurzburg11D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/DE/wuerzburg/currenttimes/intro/clueAnswer' render={() => (
              <Wurzburg11DDE gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>


            <Route exact={true} path='/munich/start' render={() => (
              <Munich1A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/cityhall' render={() => (
              <Munich1B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/start/help' render={() => (
              <Munich1BHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/partnerships' render={() => (
              <Munich1C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/partnerships/help' render={() => (
              <Munich1CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/partnercities/clueAnswer' render={() => (
              <Munich1D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/marktplatz' render={() => (
              <Munich2A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/marktplatz/clueintro' render={() => (
              <Munich2B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/marktplatz/clue' render={() => (
              <Munich2C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/marktplatz/cluehelp' render={() => (
              <Munich2CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/saltz/clueAnswer' render={() => (
              <Munich2D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/wittelsbach' render={() => (
              <Munich3A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/wittelsbach/clueintro' render={() => (
              <Munich3B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/wittelsbach/clue' render={() => (
              <Munich3C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/wittelsbach/cluehelp' render={() => (
              <Munich3CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/alterhof/clueAnswer' render={() => (
              <Munich3D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/louis' render={() => (
              <Munich4A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/louis/clueintro' render={() => (
              <Munich4B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/louis/clue' render={() => (
              <Munich4C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/louis/cluehelp' render={() => (
              <Munich4CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/bavarian/clueAnswer' render={() => (
              <Munich4D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/walls' render={() => (
              <Munich5A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/walls/clueintro' render={() => (
              <Munich5B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/walls/clue' render={() => (
              <Munich5C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/walls/cluehelp' render={() => (
              <Munich5CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/year/clueAnswer' render={() => (
              <Munich5D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/firstimage' render={() => (
              <Munich6A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/firstimage/clueintro' render={() => (
              <Munich6B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/firstimage/clue' render={() => (
              <Munich6C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/firstimage/cluehelp' render={() => (
              <Munich6CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/cupolas/clueAnswer' render={() => (
              <Munich6D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/michael' render={() => (
              <Munich7A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/michael/clueintro' render={() => (
              <Munich7B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/michael/clue' render={() => (
              <Munich7C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/michael/cluehelp' render={() => (
              <Munich7CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/william/clueAnswer' render={() => (
              <Munich7D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/william' render={() => (
              <Munich8A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/william/clueintro' render={() => (
              <Munich8B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/william/clue' render={() => (
              <Munich8C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/william/cluehelp' render={() => (
              <Munich8CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/1589/clueAnswer' render={() => (
              <Munich8D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/max' render={() => (
              <Munich9A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/max/clueintro' render={() => (
              <Munich9B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/max/clue' render={() => (
              <Munich9C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/max/cluehelp' render={() => (
              <Munich9CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/diana/clueAnswer' render={() => (
              <Munich9D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/30ywar' render={() => (
              <Munich10A gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/30ywar/clueintro' render={() => (
              <Munich10B gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/30ywar/clue' render={() => (
              <Munich10C gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/30ywar/cluehelp' render={() => (
              <Munich10CHelp gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            <Route exact={true} path='/munich/westphalia/clueAnswer' render={() => (
              <Munich10D gamemenu={this.state.gamemenu} handleGamemenu={this.handleGamemenu}/>
            )}/>
            


            <Route render={() => (
              <Redirect to="/" />
            )}/>

          </Switch>
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default App;