import React from "react";
import { pages } from "../App";
import { createDecipher } from "crypto";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';



interface MyContentScreenProps {
  changePage: (page: pages) => void;
}

export class MyContentPage extends React.Component<MyContentScreenProps> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="App-link" onClick={(e) => this.props.changePage(pages.EditCivilPage)}>
            My Content Page
        </button>

        <p>
          Latest articles for you based on your interests
          <hr></hr>
        </p>
    

      
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Election_voting_20180128.jpg/1200px-Election_voting_20180128.jpg"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere minus nesciunt deleniti dolore error,
                voluptate nostrum eligendi assumenda autem possimus nemo natus! Sit inventore dolor rem adipisci quas enim.
              </Card.Text>
              <Button variant="primary" className="mt-5">Read More...</Button>
            </Card.Body>
          </Card>

          <Card> 
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/BostonSchoolSt3.JPG/1200px-BostonSchoolSt3.JPG"  height="400"/>
            <Card.Body>
              <Card.Title><strong>Card title </strong></Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere minus nesciunt deleniti dolore error,
                voluptate nostrum eligendi assumenda autem possimus nemo natus! Sit inventore dolor rem adipisci quas enim.{' '}
              </Card.Text>
              <Button variant="primary">Read More...</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="https://media1.s-nbcnews.com/j/newscms/2017_33/2124231/170817-black-lives-matter-protest-ac-926p_024173f5245dacd5c6cccbbed5fef4af.nbcnews-ux-2880-1000.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere minus nesciunt deleniti dolore error,
                voluptate nostrum eligendi assumenda autem possimus nemo natus! Sit inventore dolor rem adipisci quas enim.
            </Card.Text>
            <Button variant="primary">Read More...</Button>
            </Card.Body>
          </Card>


        </CardDeck>
      
              </div>
    );
  }
}

