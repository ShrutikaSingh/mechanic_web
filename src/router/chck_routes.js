import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';//how did this comeß
import Home from '../components/home';
import About from '../components/about/about';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/home" component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;