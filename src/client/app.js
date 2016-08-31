import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app.jsx'
import Home from './components/home.jsx'
import History from './components/history.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';

require('./styles/app.scss');
require('./styles/home.scss');

render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="history" component={History} />
    </Route>
    <Route path="video" component={VideoPlayer}/>
  </Router>
  , document.getElementById('app')
);
