import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface LocalNewsCardProps{
    image: string;
    title: string;
    caption: string;
}

export class LocalNewsCard extends React.Component<LocalNewsCardProps>{
 render(){
     return(
        <Card className="LocalNewsCard">
            <Card.Img variant="top" src={this.props.image}/>
            <span className="voting">Voting</span>
            <Card.Body className="TwoColGridCard">
              <Card.Title className="column"><strong>{this.props.title}</strong></Card.Title>
              <Card.Text className="column">
                {this.props.caption}
              </Card.Text>
            </Card.Body>
        </Card>
     );
 }
}