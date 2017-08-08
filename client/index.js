import React from 'react';

import { render } from 'react-dom';

// Import Components
import App from "./Components/App"
import Greetings from './Components/Greetings'
import SignUp from './Components/SignUp'
import Login from "./Components/Login"

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from "react-redux"

import store, {history} from './store'

// Sentry API for the app
// import Raven from "raven-js"
// import {sentry_url} from "./data/config.js"

// Raven.config(sentry_url).install()

const router = (
  <Provider store={store}>
      <Router history={history}>
          <Route path="/" component={App}>
              <IndexRoute component={Greetings}></IndexRoute>
              <Route path="/accounts/signup" component={SignUp}></Route>
              <Route path="/accounts/login" component={Login}></Route>
          </Route>
      </Router>
  </Provider>
)


render(router, document.getElementById('root'));
