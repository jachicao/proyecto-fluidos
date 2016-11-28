// @flow
import React, { Component } from 'react';
import { Layout, Drawer, Navigation, Header, Content } from 'react-mdl';
import Home from './Home';
import Link from 'react-router/lib/Link';

export default class App extends Component {
  render() {
    return (
      <div className="App"
        style={{height: '400px', background: 'url(https://static.pexels.com/photos/6644/sea-water-ocean-waves.jpg) center / cover'}}>
        <Layout>
            <Header
              transparent
              scroll
              title="Grupo 72 - Mecánica de Fluidos"
              style={{height: '400px', color: 'white'}}>
              <Navigation>
                <Link to="/">Inicio</Link>
                <Link to="/energia">Energía</Link>
                <Link to="/turbina">Turbinas</Link>
                <Link to="/impacto">Impacto</Link>
                <Link to="/relevancia">Relevancia</Link>
              </Navigation>
            </Header>
            <Content>
              {
                this.props.children
                  ? this.props.children
                  : <Home />
              }
            </Content>
        </Layout>
      </div>
    );
  }
};
