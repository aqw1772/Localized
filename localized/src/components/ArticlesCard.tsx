import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface ArticlesCardProps{
    image: string;
    title: string;
    caption: string;
    topic: string;
    link?: string;
}
export class ArticlesCard extends React.Component<ArticlesCardProps>{
    render(){
        return(
            <Card className="ArticlesCard">
              <Card.Img variant="top" src={this.props.image}/>
              <span className={this.props.topic}>{this.props.topic}</span>
              <Card.Body>
                <Card.Title><strong>{this.props.title}</strong></Card.Title>
                <Card.Text>
                  {this.props.caption}
                </Card.Text>
                <a href={this.props.link}><button>Read More...</button></a>
              </Card.Body>
            </Card>
        );
        
    }
   }
