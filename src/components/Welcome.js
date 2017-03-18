import React from 'react';
import Card from 'react-bootstrap/Card';

export default class Welcome extends React.Component {

  render(){

    return (

    <Card className="Main">
      <Card.Body>
        <Card.Title className="Main-title">Welcome</Card.Title> 
        <Card.Text>
          <i>Welcome to my corner of the internet!</i>

          <br /><br />
          Here, you'll find a collection of my projects and discover the technologies I specialize in.

          <br /><br />
          My expertise includes AWS cloud architecture, web applications, SQL databases, 
          infrastructure as code, and CI/CD using Docker, Terraform, Jenkins, and Git. 
          I prioritize test-driven development and have extensive experience 
          building systems from scratch. I've implemented serverless REST APIs in Python/Flask 
          and honed front-end GUI skills with Qt/C++ and React/Javascript. 
          I also have hands-on experience with embedded programming in AVR and ARM-based SoCs. 
          In the forensic industry, I designed and implemented systems for critical casework, including 
          an inventory management system for forensic firearms units. 

          <br /><br />
          Thank you for visiting my personal portal. 
          Feel free to browse through my projects and delve into the technologies I embrace.

          </Card.Text>
        </Card.Body> 
      </Card>);
}
};
