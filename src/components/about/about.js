import React, { Component } from 'react';
import AppNavbar from '../nav_bar_reactstrap';
import Form from '../register';
class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <AppNavbar/>
       About Us
       <Form/>
     
      </React.Fragment>
    )
  }
}

export default AboutUs;