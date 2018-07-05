import React from 'react';
import PropTypes from 'prop-types';
import GridItem from './GridItem';
import { data } from '../data/data';

const Grid = ({ match: { params } }) => {
  const grid = data
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

Grid.propTypes = {
  match: PropTypes.object.isRequired
};

export default Grid;
