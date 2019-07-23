import React,{Component} from 'react';
import {Provider} from 'react-redux';
import decode from 'jwt-decode';
import api from '../services/api';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//how did this come
import AppNavBar from '../components/nav_bar_reactstrap';
import Footer from '../components/footer/footer';
import CopyRight from '../components/copyright/copyright';
import  Auth from '../components/Auth';
import {store} from '../store';
import { setToken, setCurrentUser, addError } from '../store/actions';
import ErrorMessage from '../components/ErrorMessage';
if(localStorage.jwtToken) 
{ // so if we wanna check if the user is already authenticated before the application opens
    setToken(localStorage.jwtToken);//set the user in here
    try{
      store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
      }catch(err){
          store.dispatch(setCurrentUser({}));
          store.dispatch(addError);
 }
}

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
    <Provider store={store}>
         <React.Fragment> 
           <Auth authType={'login'} />
           <ErrorMessage />
            <AppNavBar/>
              <Footer/>
              <CopyRight/>
        </React.Fragment>
    </Provider>
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
















