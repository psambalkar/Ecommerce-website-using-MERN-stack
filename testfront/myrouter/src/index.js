import React from 'react';
import ReactDOM from 'react-dom';
import{Route,Link,Switch,BrowserRouter as Router}from "react-router-dom"
import './index.css';
import App from './App';
import user from './user';

import visit from './visit';
import notfound from './notfound';
const routing =(
    <Router>
        <div>
            <ul>
                <li> <Link to="/parth">Home</Link></li>
                <li> <Link to="/user">USER</Link></li>

                <li> <Link to="/visit">VISIT</Link></li>
            </ul>
        </div>
        <Switch>
        <Route path="/parth" component={App}></Route>
        <Route path="/user" component={user}></Route>

        <Route path="/visit" component={visit}></Route>
        <Route  component={notfound}></Route>

        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

