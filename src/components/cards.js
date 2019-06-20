import React,{Component} from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import pic1 from '../img/auto.png';

const divStyle = {
    color: 'blue',
    paddingTop: '50px',
    
    paddingBottom:'5%'
  };
  

export default class Cards extends Component{
render(){
    return(
        <Container style={divStyle}>
            <Row>
                <Col sm={12} lg={4}>
                    <Card2 title="WE MAKE IT EASY" body="Get a quote and book a service online 24/7. Our mechanics will come to your home or office, even on evenings and weekends."/>
                </Col>
                <Col sm={12} lg={4} > 
                    <Card2 title="FAIR AND TRANSPARENT PRICING" body="We offer fair and transparent pricing and provide estimates upfront for hundreds of services on thousands of cars. Book with confidence."  />              
                </Col>
                <Col sm={12} lg={4}>    
                    <Card2 title="HAPPINESS GUARANTEED" body="We only work with highly rated mechanics.All services are backed by our 12-month / 12,000-mile warranty."/>              
                </Col>
            </Row>
        </Container>
    )
}
}


class Card2 extends Component{
    render(){
        return(

        <Card>
            <CardImg top width='100%' src={pic1}  ></CardImg>
            <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardText>
                        {this.props.body}
                </CardText>
            </CardBody>
        </Card>
        )
    }
}
