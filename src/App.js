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
import SlideShow from './components/slideshow';
import Info from './components/info';
import CarouselMain from './components/carousel';
import Cards from './components/cards';

class App extends Component {
  render(){
  return(
         <React.Fragment>
              <NavBar/>
              <CarouselMain/> 
              <hr></hr>
              <Cards/>
        </React.Fragment>
        
  )
 }
}

export default App;
