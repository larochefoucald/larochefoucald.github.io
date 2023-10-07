import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import resume from "../static/chad_chapnick_resume.pdf"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export default class Menu extends React.Component {

  render() {
    return (
    <Card className="Menu">
      <Card.Header> 
        <Link to="/" className="Menu-full-name">Chad Chapnick</Link>
      </Card.Header>
      <ListGroup variant="flush" className="Menu-list">

        <ListGroup.Item>
          <Link to="/projects" className="Menu-item">Projects</Link> 
          <Card.Text className="text-muted">That may interest you</Card.Text>

          <Link to="/papers" className="Menu-item">Papers</Link> 
          <Card.Text className="text-muted">Notable publications & collaborations</Card.Text>

          <Link to="/blog" className="Menu-item">Blog</Link> 
          <Card.Text className="text-muted">Food for thought</Card.Text>

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

    <Card.Footer className="text-muted">
      <Card.Link 
        className="Menu-item"
        href="https://www.linkedin.com/in/chapnickc" 
        target="_blank">
        <FaLinkedin />
      </Card.Link>
      <Card.Link 
        className="Menu-item"
        href="https://github.com/chapnickc" 
        target="_blank">
        <FaGithub />
      </Card.Link>
      <img src={logo} className="float-right App-logo" alt="logo"/> 
    </Card.Footer>

  </Card>);
  }
};
