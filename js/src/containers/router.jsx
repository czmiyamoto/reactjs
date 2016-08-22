import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import App from './App';
import NotFound from './NotFound';

import PageA from './PageA';
import PageB from './PageB';

export default function (history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PageA} />
        <Route path="page-b" component={PageB} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  );
}
