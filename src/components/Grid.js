import React from 'react';
import Header from './Header';
// import GridItem from './GridItem';
import { data } from '../data/data';

const Grid = () => {
  let grid = data
    .map(gridItem => {
      return (
        <li key={gridItem.name}>{gridItem.name}</li> // change this to anchor tags
      );
    })

  return (
    <div>
      <Header />
      <ul className="grid">
        {grid}
      </ul>
    </div>
  );
};

export default Grid;
