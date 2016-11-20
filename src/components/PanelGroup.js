import React from 'react';
import Panel from './Panel';

const PanelGroup = ({data}) => {
  return (
    <ul className="panel-group">
      {data.map(panel => {
        return (
          <Panel
            key={panel.name}
            heading={panel.heading}
            name={panel.name}
            links={panel.links}
          />
        );
      })}
    </ul>
  );
};

export default PanelGroup;
