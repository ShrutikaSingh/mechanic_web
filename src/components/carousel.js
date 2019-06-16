import React,{Component} from 'react';
import ReactDom from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

class CarouselMain extends Component{
    render(){
        return(
            <React.Fragment>
            <Carousel>
                <div>
                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--nY4t5Jgy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ce0rln8gpe1rppwj7udi.png"/>
                    <p className="first">Welcome to jack my motor</p>
                </div>
                <div>
                    <img src="../logo.jpg"/>
                    <p className="second">Second slide</p>
                </div>
                <div>
                    <img src="../logo.png"/>
                    <p className="third">Third slide</p>
                </div>
            </Carousel>
            </React.Fragment>
        );
    }
}

export default CarouselMain;