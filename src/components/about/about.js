import React, { Component } from 'react';
import AppNavbar from '../nav_bar_reactstrap';
import { Container,Row,Col } from 'reactstrap';
import jmm from '../../img/jmm.jpg';
import logo from '../../img/logo.png';

import Content from './col_about';

const divStyle = {
  color: 'grey',
  paddingTop: '50px',
  
  paddingBottom:'5%'
};


class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
       
         <img src={jmm} alt="services" height='200px' width="100%"></img>       
         
       <Container style={divStyle}>
       <h4 >Best mechanics from your community</h4>
      
       
        <Row>
        
          <Col style={divStyle}>
              <h5>
              On average our mechanics have over ten years of experience and most are master technicians with ASE Certifications.
              <br/>
              <br/>
              We extensively screen all of our mechanics with background, criminal, and reference checks.
              <br/>
              <br/>
              On each mechanic’s profile page, you’ll see a full list of all their certifications, years of experience, job skills, and feedback from real customers. We constantly monitor the performance of our mechanics to make sure they’ll provide you with professional and courteous service.
              <br/>
              <br/>
              At YourMechanic, 
              you can trust the people who are working on your car. 
              </h5>
          </Col>
          <Col style={divStyle}>
              <img src={logo} alt="aboutus image" width="500px" height="200px" ></img>
              
          </Col>
        </Row>
       </Container>
       <Content/>
     
      </React.Fragment>
    )
  }
}

export default AboutUs;