import React from 'react';
import { render } from 'react-dom';
import Index from './components/Index';
import PanelGroup from './components/PanelGroup';
import Grid from './components/Grid';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';

const rootPath = process.env.ENV === 'production' ? '/front-end-dev-links' : '/';

const App = () => {
  return (
    <Router basePath={rootPath}>
      <Index>
        <Switch>
          <Route path="/:id" component={Grid} />
          <Route exact path="/" component={PanelGroup} />
        </Switch>
      </Index>
    </Router>
  );
};

render(
  <App />, document.getElementById('root')
);
