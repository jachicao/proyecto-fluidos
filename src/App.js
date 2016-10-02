//@flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Alert, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Hola mundo</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link2</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Action2</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        <Alert bsStyle='success'>
          <strong>It works!</strong> Good job :)!.
        </Alert>
        <Button bsStyle="info" bsSize="large">Boton bkn</Button>
      </div>
    );
  }
}

export default App;
