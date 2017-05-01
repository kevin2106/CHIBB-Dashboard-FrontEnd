import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { requireAuth } from './services/AuthService';

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Sensors from "./pages/Sensors";
import Settings from "./pages/Settings";
import Callback from "./components/Callback";

const app = document.getElementById('app');


const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Layout}/>
        <Route path="/sensors" component={Sensors} onEnter={requireAuth} />
        <Route path="/settings" component={Settings}></Route>
        <Route path="/callback" component={Callback} />
      </Router>
    </div>
  )
}
ReactDOM.render(<Root />, document.getElementById('app'));

//ReactDOM.render(
//  <Router history={hashHistory}>
//   <Route path="/" component={Layout}>
//     <IndexRoute component={Home}></IndexRoute>
//      <Route path="sensors" component={Sensors} onEnter={requireAuth}></Route>
//     <Route path="settings" component={Settings}></Route>
//     <Route path="/callback" component={Callback}></Route>
//   </Route>
 //</Router>,
//app);
