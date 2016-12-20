import React from 'react';
import { render } from 'react-dom';
import PanelGroup from './components/PanelGroup';
import Grid from './components/Grid';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './style.css';

const rootPath = process.env.ENV === 'production' ? '/front-end-dev-links' : '/';

const App = () => {
  return (
    <Router history={browserHistory}>
      <Route path={rootPath} component={PanelGroup}>
        <IndexRoute component={PanelGroup} />
      </Route>
      <Route path={":id"} component={Grid} />
    </Router>
  );
};

render(
  <App />, document.getElementById('root')
);
