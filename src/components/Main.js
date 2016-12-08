import React from 'react';
import PanelGroup from './PanelGroup';

const Main = ({data}) => {
  return (
    <main className="main">
      <PanelGroup data={data} />
    </main>
  );
};

export default Main;
