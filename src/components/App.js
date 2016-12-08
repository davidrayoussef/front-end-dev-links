import React from 'react';
import Header from './Header';
import Main from './Main';
import { data } from '../data/data';

const App = () => {
  return (
    <div>
      <Header />
      <Main data={data} />
    </div>
  );
};

export default App;
