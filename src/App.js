import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import ReactGA from 'react-ga';
import Row from 'react-bootstrap/Row';
import { 
  HashRouter as Router, 
  Switch, 
  Route 
} from "react-router-dom";
import Menu from './components/Menu.js';
import Welcome from './components/Welcome.js';
import { papers }from './components/Paper.js';
import { projects } from './components/Project.js';
import { config } from './config';

export default function App()
{
  document.title=config.title;
  ReactGA.initialize(config.ga);
  return (
    <Router>
      <Container fluid className="App mt-5 mb-5">
        <Row>
          <Col md={{span: 3, offset: 1}}> 
            <Menu/> 
          </Col>
          <Col md={{span: 7, offset: 0}} className="App-main-content">
            <Switch>
              <Route path="//"> <Welcome /> </Route>
              <Route path="/papers"> {papers} </Route>
              <Route path="/projects"> { projects } </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}
