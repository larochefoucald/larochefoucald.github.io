import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import resume from "../static/chad_chapnick_resume.pdf"

  /*
          <Link to="/snippets" className="Menu-item">Snippets</Link> 
          <Card.Text className="text-muted"> 
          That resonate with me
          </Card.Text>
          */

export default class Menu extends React.Component {

  render() {
    return (
    <Card className="Menu">
      <Card.Body> 
        <Link to="/" className="Menu-full-name">Chad Chapnick</Link>
      </Card.Body>

      <ListGroup variant="flush" className="Menu-list">

        <ListGroup.Item>
          <Link to="/projects" className="Menu-item">Projects</Link> 
          <Card.Text className="text-muted">That may interest you</Card.Text>

          <Link to="/papers" className="Menu-item">Papers</Link> 
          <Card.Text className="text-muted">Notable publications & collaborations</Card.Text>

        </ListGroup.Item>

        
        <ListGroup.Item>
          <Card.Link 
          href={resume}
          target="_blank" 
          className="Menu-item">
          Résumé
        </Card.Link>
      </ListGroup.Item>

    </ListGroup>

    <Card.Body>
      <Card.Link 
      className="Menu-item"
      href="https://github.com/chapnickc" 
      target="_blank">
        Github
      </Card.Link>
      <Card.Link 
      className="Menu-item"
      href="https://www.linkedin.com/in/chapnickc" 
      target="_blank">
        LinkedIn
      </Card.Link>
    </Card.Body>

    <Card.Footer className="text-muted">
      Made with React <img src={logo} className="App-logo" alt="logo"/> 
    </Card.Footer>

  </Card>);
  }
};
