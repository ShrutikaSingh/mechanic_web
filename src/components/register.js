import React from 'react';
import { Col, Row,Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Container>
      <Form>
        <FormGroup>
          <Label for="exampleAddress">Username</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="username"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="abc@gmail.com" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password " />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
        <Col md={6}>
        <FormGroup>
          <Label for="exampleAddress">Model Type</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="2 Wheller Or 4 wheeler"/>
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
          <Label for="exampleAddress">Model Name</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="eg. Hyundai"/>
        </FormGroup>
        </Col>
        </Row>

        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>Check me out</Label>
        </FormGroup>
        <Button>Sign in</Button>
      </Form>
      </Container>
    );
  }
}