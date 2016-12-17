import React, { PropTypes } from 'react';
import Header from './Header';
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
    <div>
      <Header />
      <ul className="panel-group">
        {panels}
      </ul>
    </div>
  );
};

PanelGroup.PropTypes = {
  
}

export default PanelGroup;
