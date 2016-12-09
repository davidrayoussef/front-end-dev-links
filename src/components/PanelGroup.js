import React from 'react';
import Panel from './Panel';

const PanelGroup = ({ data }) => {
  let panels = data
    .map(panel => {
      return (
        <Panel
          key={panel.name}
          heading={panel.heading}
          name={panel.name}
          icon={panel.icon}
          links={panel.links}
        />
      );
    })
    // In order to get the Masonry effect, we need to wrap every 3 panels in divs
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
