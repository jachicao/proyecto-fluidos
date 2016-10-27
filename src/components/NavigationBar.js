// @flow
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router'

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Grupo 72 - Mecánica de Fluidos</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/energy">
                <NavItem eventKey={1}>Energía</NavItem>
              </LinkContainer>
              <LinkContainer to="/turbine">
                <NavItem eventKey={1}>Turbinas</NavItem>
              </LinkContainer>
              <LinkContainer to="/relevance">
                <NavItem eventKey={1}>Importancia</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
};
