import React,{Component} from 'react';
import ReactDom from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {Row,Col, Container} from 'react-bootstrap';

import earth from '../img/main1.jpg';
class CarouselMain extends Component{
    render(){
        return(
                <div class="main_img">
                <Container>
                    <Row>
                        <Col lg="12" xs='12' sm='6' md='8'>
                                 <img src={earth} alt="services" fluid></img>  
                         </Col>
                    </Row>
                </Container> 
                </div>
           
        );
    }
}



export default CarouselMain;