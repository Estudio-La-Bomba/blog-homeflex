import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Post from '../pages/Post';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />

    <Route path="/post/:post+" component={Post} />
  </Switch>
);

export default Routes;
