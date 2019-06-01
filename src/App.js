import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//how did this comeß
import NavBar from './components/navbar';
import ServiceList from './components/servicelist';
import Details from './components/details';
import Cart from './components/cart';
import Default from './components/default';
import Signup from './components/signup';

class App extends Component {
  render(){
  return(
    <React.Fragment>
   
      <NavBar></NavBar>

      <Switch>
          <Route exact path="/" component={ServiceList}></Route> 
          <Route  path="/details" component={Details}></Route>
          <Route  path="/cart" component={Cart}></Route>
          <Route  path="/signup" component={Signup}></Route>
          <Route  component={Default}></Route>
      </Switch>

    </React.Fragment>
    
  )
 }
}

export default App;
