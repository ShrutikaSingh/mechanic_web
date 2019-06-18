import React,{Component} from 'react';
import {Row,Col,Container} from 'reactstrap';
class Info extends Component{
    render(){
        return(
            <React.Fragment>
                <Container>
                    <Row>
                      <Col>
                        <Data/>    

                      </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

class Data extends Component{
    render(){
        return(
            <img alt="Convenience" class="icon" src="//d310p4tz9tc9pz.cloudfront.net/assets/main/icon-easy-47c13d6dcacaa69bea11f7f20bfeeb55.svg"></img>
        )
    }
}




export default Info;