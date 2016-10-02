//@flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Alert, Button, Jumbotron, Grid, Row, Thumbnail, Col, Carousel, Panel, ProgressBar, Label, Collapse, Well } from 'react-bootstrap';
const title = (
  <h3>Panel title</h3>
);

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }
  render() {
    return (
      <div className="App">
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Label>Our progress</Label>
        <ProgressBar active now={5} bsStyle="success" label="5%" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {/*
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        <Alert bsStyle='success'>
          <strong>It works!</strong> Good job :)!.
        </Alert>
        <Button bsStyle="info" bsSize="large">Info button</Button>
        */}
        <Jumbotron>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p><Button bsStyle="primary" onClick={ ()=> this.setState({ open: !this.state.open })}>Learn more</Button></p>

            <Collapse in={this.state.open}>
              <div>
                <Well>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Well>
              </div>
            </Collapse>
        </Jumbotron>
        <Panel header={title} bsStyle="primary">
          Panel content
        </Panel>
          <Grid>
            <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={logo} alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={logo} alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={logo} alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            </Row>
          </Grid>
          <Carousel interval="1000">
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={logo}/>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={logo}/>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={logo}/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
      </div>
    );
  }
}

export default App;
