import React from 'react';
import { render } from 'react-dom';
import Index from './components/Index';
import PanelGroup from './components/PanelGroup';
import Grid from './components/Grid';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './style.css';

const rootPath = process.env.ENV === 'production' ? '/front-end-dev-links' : '/';

const App = () => {
  return (
    <Router history={hashHistory}>
      <Route path={rootPath} component={Index}>
        <IndexRoute component={PanelGroup} />
        <Route path={':id'} component={Grid} />
      </Route>
    </Router>
  );
};

render(
  <App />, document.getElementById('root')
);
