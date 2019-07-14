import React,{Component} from 'react';
import api from './services/api';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//how did this comeß

import Routes from './router/chck_routes';
import AppNavBar from './components/nav_bar_reactstrap';
import Footer from './components/footer/footer';
import CopyRight from './components/copyright/copyright';


class App extends Component {

  async componentDidMount()
    {
      const result= api.call('post','auth/login',{
        username:'username',
        password:'password'
      });
      console.log(result);
    }
  render(){
  return(
         <React.Fragment> 
            <AppNavBar/>
              <Routes/>
              <Footer/>
              <CopyRight/>
        </React.Fragment>
  )
 }
}
export default App;
















{/*}

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



*/}
















