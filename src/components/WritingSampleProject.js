import Card from 'react-bootstrap/Card';
import React from 'react';
import sample from '../static/pdf/Chapnick_MW4ab_edit.pdf'

export default class WritingSampleProject extends React.Component {
  render() {
    return (
        <Card className="Main">
        <Card.Body>
          <Card.Title>Out of the Loop: A Proposal to Regulate Autonomous Weapon Systems</Card.Title>
          <Card.Subtitle>Undergraduate Writing Sample</Card.Subtitle>
          <Card.Text className="pt-3">
            I am writing to draw your attention to the growing debate surrounding lethal autonomous weapons. These systems will be able to select and engage targets without meaningful human control. This engenders a new revolution in warfare alongside the likes of gunpowder and nuclear arms. The antiseptic nature of autonomous weapons has the potential to bifurcate the future of humanity, and the United States is in a position to set precedent on this matter. I have written a research proposal adressing this problem and offering viable solutions 
          </Card.Text>
          <Card.Link className="float-right" href={sample}>Paper</Card.Link>
        </Card.Body>
        </Card>
    )
  }
}

