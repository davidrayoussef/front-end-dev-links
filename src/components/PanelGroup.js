import React from 'react';
import Panel from './Panel';
import { data } from '../data/data';

const PanelGroup = () => {
  let panels = data
    .map(panel => {
      return (
        <Panel
          key={panel.name}
          heading={panel.heading}
          name={panel.name}
          icon={panel.icon}
          color={panel.color}
          links={panel.links}
        />
      );
    })
    // In order to get the Masonry effect, we need to create columns.
    // In this case, we'll put 3 panels in each column
    .map((v,i,a) => {
      if (i % 3 === 0) {
        return (
          <div key={i} className="column">{ a.slice(i, i + 3) }</div>
        );
      } else return '';
    });

  return (
    <ul className="panel-group">
      {panels}
    </ul>
  );
};

export default PanelGroup;
