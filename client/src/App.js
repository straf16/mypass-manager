import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import Main from './containers/Main'
import Onboarding from './containers/Onboarding/onboarding';

import './App.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch({
        type: 'SET_LOGIN',
        payload: true
      })
    } else {
      dispatch({
        type: 'SET_LOGIN',
        payload: false
      })
    }
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/onboarding/login"/>
        </Route>
        <Route path="/onboarding/:state">
          <Onboarding />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
