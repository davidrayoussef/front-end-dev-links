import React from 'react';
import GridItem from './GridItem';
import { data } from '../data/data';

const Grid = ({ params }) => {
  let grid = data
    .filter(devLinks => devLinks['pathname'] === params.id)
    .map(gridItem => {
      return (
        <GridItem
          key={gridItem.name}
          heading={gridItem.heading}
          name={gridItem.name}
          icon={gridItem.icon}
          color={gridItem.color}
          links={gridItem.links}
        />
      );
    });

  return (
    <div className="grid">
      {grid}
    </div>
  );
};

export default Grid;
