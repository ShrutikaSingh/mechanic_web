import React,{Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';//how did this comeß
import Info from './info';
import CarouselMain from './carousel';
import Cards from './cards';
//import Routers from './router/routes';



const divStyle = {
  paddingTop: '50px',
};

class Home extends Component {
    render(){
    return(
           <React.Fragment>      
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

  export default Home;
