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
import AppNavbar from './components/nav_bar_reactstrap';



const divStyle = {
 
  paddingTop: '50px',

};

class App extends Component {
  render(){
  return(
         <React.Fragment> 
              <AppNavbar/>
              <CarouselMain/> 
              <div class="col-lg-12 text-center text-space mt-200" style={divStyle}>
                  <h2 class="g-header-text">Get over 500 car repair services at your home or office</h2>
              </div>
              <Info/>
              <Cards/>
              <div class="col-lg-4 col-md-5 col-sm-6 col-centered"><a class="btn-orange-fill" href="/about/">GET AN INSTANT QUOTE</a></div>
        </React.Fragment>
  )
 }
}

export default App;
