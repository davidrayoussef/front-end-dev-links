import React, { Component } from 'react';
import Main from './Main';
import { data } from '../data/data';

class App extends Component {
  render() {
    return (
      <Main data={data} />
    );
  }
}

export default App;
