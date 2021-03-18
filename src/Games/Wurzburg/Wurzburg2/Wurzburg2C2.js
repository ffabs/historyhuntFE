import React, { Component } from 'react';
import Wurzburg2C from './Wurzburg2C';

class Wurzburg2C2 extends Component {
    
  render() {
    
    return ( 
      <div>
        <Wurzburg2C inside="false" {...this.props}/>
      </div>  
    );
  }
}

export default Wurzburg2C2;