import Wurzburg2D from './Wurzburg2D';
import React, { Component } from 'react';

class Wurzburg2D1 extends Component {
    
  render() {
    
    return ( 
      <div>
        <Wurzburg2D inside="true" {...this.props}/>
      </div>  
    );
  }
}

export default Wurzburg2D1;