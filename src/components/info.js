import React,{Component} from 'react';
import {Row,Col,Container} from 'reactstrap';
class Info extends Component{
    render(){
        return(
            <React.Fragment>
                <Container>
                    <Row>
                      <Col>
                        <Data body="Get a quote and book a service online 24/7. Our mechanics will come to your home or office, even on evenings and weekends." img_link="//d310p4tz9tc9pz.cloudfront.net/assets/main/icon-easy-47c13d6dcacaa69bea11f7f20bfeeb55.svg"/>    
                      </Col>
                      <Col>
                        <Data body="Get a quote and book a service online 24/7. Our mechanics will come to your home or office, even on evenings and weekends." img_link="//d310p4tz9tc9pz.cloudfront.net/assets/main/icon-shield-85a3db2fcea7ced728cdc09be095ed2e.svg"/>    
                      </Col>
                      <Col>
                        <Data body="Get a quote and book a service online 24/7. Our mechanics will come to your home or office, even on evenings and weekends." img_link="//d310p4tz9tc9pz.cloudfront.net/assets/main/icon-pricing-3c7b4a919e3a18e6cdd92acbfad1b2a4.svg" />    
                      </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

const divStyle = {
  color: 'blue',
  paddingTop: '50px',
  paddingLeft:'40%',
  paddingBottom:'5%'
};

class Data extends Component{
    render(){
        return(
            <React.Fragment>
            <img style={divStyle} alt="Convenience" class="icon" src={this.props.img_link}  ></img>
            <div class="text-center">
             <h5>{this.props.body}</h5>
            </div>
            </React.Fragment>
        )
    }
}




export default Info;