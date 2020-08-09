import React, { Component } from 'react';
import WPHome from './containers/WPHome';


class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <WPHome />   
    )
  }
}

export default App