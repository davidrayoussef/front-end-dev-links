import React from 'react';
import Panel from './Panel';

const PanelGroup = ({ data }) => {
  // In order to get the Masonry effect, we need to wrap every 3 panels in divs
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
    }) // First we wrap each panel in an li tag
    .map((v,i,a) => {
      if (i % 3 === 0) {
        return (
          <div key={i} className="column">{a.slice(i, i + 3)}</div>
        ); // Then wrap every 3 lis in a div
      }
    })
    .filter(v => v !== undefined); // Then remove undefined values returned because of above condition

  return (
    <ul className="panel-group">
      {panels}
    </ul>
  );
};

export default PanelGroup;
