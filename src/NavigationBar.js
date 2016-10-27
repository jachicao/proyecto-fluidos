// @flow
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a> Grupo 72 - Mecánica de Fluidos</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown eventKey={1} title="Energía" id="basic-nav-dropdown" href="#">
                <MenuItem eventKey={3.1}>¿Qué es la energía? </MenuItem>
                <MenuItem eventKey={3.2}>Fuentes de energía</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="#">Turbinas</NavItem>
              <NavItem eventKey={2} href="#">Importancia energía marina</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
};
