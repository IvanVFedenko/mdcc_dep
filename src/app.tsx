import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Agreements } from './components/agreements/agreements';
import { HomePage } from './components/home_page/home_page';
import { StakingPage } from './components/staking_page/staking_page';
import { RoutingPaths } from './resources/routing_paths.enum';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={RoutingPaths.HOME}>
          <HomePage />
        </Route>
        <Route exact path={RoutingPaths.STAKING}>
          <StakingPage />
        </Route>
        <Route exact path={RoutingPaths.IMPRINT}>
          <Agreements />
        </Route>
        <Route exact path={RoutingPaths.PRIVACY}>
          <Agreements />
        </Route>
        <Route exact path={RoutingPaths.TERMS}>
          <Agreements />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
