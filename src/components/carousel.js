import React,{Component} from 'react';
import ReactDom from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {Row,Col} from 'react-bootstrap';
import ligo from '../logo.jpg';
import hi from '../logo.png';
import earth from '../img/earth.png';
class CarouselMain extends Component{
    render(){
        return(
            <React.Fragment>
            <Carousel>
                <div>
                    <img src={ligo} alt="services" className="navbar-brand" height="800px"></img>    
                </div>
                <div>
                    <img src={ hi}/>
                    <p className="second">Second slide</p>
                </div>
                <div>
                    <img src={earth}/>
                    <p className="third">Third slide</p>
                </div>
            </Carousel>
            </React.Fragment>
        );
    }
}



export default CarouselMain;