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
        <Card>
            <Card.Img variant="top" src=""/>
            <span className="voting">Voting</span>
            <Card.Body>
              <Card.Title><strong>{this.props.title}</strong></Card.Title>
              <Card.Text>
                {this.props.caption}
              </Card.Text>
              <Button variant="primary">Read More...</Button>
            </Card.Body>
        </Card>
     );
 }
}