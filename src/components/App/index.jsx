import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import { Home, Game } from '../../components';
import { List } from '../../components/Game';


const App = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/game/list" component={List} />
    </Switch>
  )
}

export default withRouter(App);