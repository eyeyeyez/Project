import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import localStorage from 'localStorage'
import Sender from './page/Sender/sender.js';
import Receiver from './page/Receiver/receiver.js';
import Login from './page/Login/login.js';
import App from './page/App/App';
import News from './page/News/News';
import Api from './Api.js';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/news" component={News} />
    <Route exact path="/api" component={Api} />
    <Route exact path="/receiver" component={Receiver} />
    <Route exact path="/login" component={Login} />
    {!localStorage.getItem('username') ? (
      <Redirect to="/login" />
    ) : (
      <Switch>
        <Route exact path="/sender" component={Sender} />
      </Switch>
    )}
</Switch>
)

export default Routes
