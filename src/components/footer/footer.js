import React,{Component} from 'react';
import {Row,Col,Container} from 'reactstrap';

const f_style={
    backgroundColor:'black',
    color:'white',
}

export default class Footer extends Component{
    render(){
        return(
            <div style={f_style}>
                <Container>
                    <h1>FOOTER</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
            <Row>
                <Col sm={12} lg={4}>
                 <div>
                    <p>
                    fdfd ghhghf fhg hg ghbn yhb gjhn 
                    </p>
                 </div>
                 </Col>
                 <Col sm={12} lg={4}>
                 <div>
                    <p>
                    fdfd ghhghf fhg hg ghbn yhb gjhn 
                    </p>
                 </div>
                 </Col>
                 <Col sm={12} lg={4}>
                 <div>
                    <p>
                    fdfd ghhghf fhg hg ghbn yhb gjhn 
                    </p>
                 </div>
                 </Col>

            </Row>
            </Container>
            </div>
        )
    }
}