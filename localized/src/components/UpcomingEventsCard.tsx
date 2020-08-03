import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface UpcomingEventsCardProps{
    image: string;
    title: string;
    caption: string;
    topic: string;
    link?: string;
}
export class UpcomingEventsCard extends React.Component<UpcomingEventsCardProps>{
    render(){
        return(
          <div>
            <Card className="UpcomingEventsCard">
              <Card.Img variant="top" src={this.props.image}/>
              <span className={this.props.topic}>{this.props.topic}</span>
              <Card.Body className="TwoColGridCard">
                <Card.Title className="column1"><strong>{this.props.title}</strong></Card.Title>
                <Card.Text className="column1">
                  {this.props.caption}
                </Card.Text>
                <a href={this.props.link}><button>View Details...</button></a>
              </Card.Body>
            </Card>
          </div>
        );
        
    }
   }
