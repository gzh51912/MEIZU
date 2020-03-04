import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {routes} from './router'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <Switch>
       {
         routes.map((item)=>{
          return <Route  key={item.path} path={item.path} component={item.component}></Route>
         })
       }
       {/* 设置默认进入的页面 */}
       <Redirect from='/' to='/top' />
       </Switch>
    </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
