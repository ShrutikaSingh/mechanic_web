import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//how did this comeß
import Info from './components/info';
import CarouselMain from './components/carousel';
import Cards from './components/cards';
import Routers from './router/routes';
import S_Form from './components/s_form';



const divStyle = {
  paddingTop: '50px',
};

class App extends Component {
  render(){
  return(
         <React.Fragment> 
              <Routers/>
              <CarouselMain/> 
              <div class="col-lg-12 text-center text-space mt-200" style={divStyle}>
                  <h2 class="g-header-text">Get over 500 car repair services at your home or office</h2>
              </div>
              <Info/>
              <Cards/>
              <S_Form/>
              <div class="col-lg-4 col-md-5 col-sm-6 col-centered"><a class="btn-orange-fill" href="/about/">GET AN INSTANT QUOTE</a></div>
        </React.Fragment>
  )
 }
}

export default App;
