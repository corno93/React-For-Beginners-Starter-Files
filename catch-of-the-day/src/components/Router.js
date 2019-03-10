import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

// Router component - stateless function componenet
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      {/* catch all with belows router */}
      <Route component={NotFound} />

    </Switch>
  </BrowserRouter>
);

export default Router;
