import React from "react";
import { pages } from "../App";
import { createDecipher } from "crypto";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import { BsNewspaper } from "react-icons/bs";
import {BsCalendar} from "react-icons/bs";


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

        <p className="p"> 
          Latest articles for you based on your interests <BsNewspaper/>
          <hr></hr>
        </p>
    

        <CardDeck className="card-deck">
          <Card>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Election_voting_20180128.jpg/1200px-Election_voting_20180128.jpg"/>
            <span className="voting">Voting</span>
            <Card.Body>
              <Card.Title><strong>Mail Voting gone wrong again -WSJ</strong></Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere minus nesciunt deleniti dolore error,
                voluptate nostrum eligendi assumenda autem possimus nemo natus! Sit inventore dolor rem adipisci quas enim.
              </Card.Text>
              <Button variant="primary">Read More...</Button>
            </Card.Body>
          </Card>

          <Card> 
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/BostonSchoolSt3.JPG/1200px-BostonSchoolSt3.JPG"/>
          <span className="school">Schools</span>
            <Card.Body>
              <Card.Title><strong>Schools close due to COVID-19:</strong></Card.Title>
              <Card.Text>
                <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere minus nesciunt deleniti dolore error,
                voluptate nostrum eligendi assumenda autem possimus nemo natus! Sit inventore dolor rem adipisci quas enim.{' '} </div>
              </Card.Text>
              <Button variant="primary">Read More...</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="https://media1.s-nbcnews.com/j/newscms/2017_33/2124231/170817-black-lives-matter-protest-ac-926p_024173f5245dacd5c6cccbbed5fef4af.nbcnews-ux-2880-1000.jpg" />
            <span className="protest">Protests</span>
            <Card.Body>
              <Card.Title><strong>Black Lives Matter Protests Continue </strong></Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere minus nesciunt deleniti dolore error,
                voluptate nostrum eligendi assumenda autem possimus nemo natus! Sit inventore dolor rem adipisci quas enim.
            </Card.Text>
            <Button variant="primary">Read More...</Button>
            </Card.Body>
          </Card>
        
        </CardDeck>

        <p className="p3"> 
          Upcoming Events <BsCalendar />
        </p>

        <CardDeck className= "Events-Deck">
        <Card>
            <Card.Img variant="top" src="https://www.redmond.gov/ImageRepository/Document?documentId=13898" />
              <span className="Derby"> Derby Days</span>
              <Card.Body>
                <Card.Title><strong>Tuesday at 10am</strong></Card.Title>
                <Card.Text>
                  The Derby Days tradition continues in 2020 with our virtual edition. Celebrate Redmond with opportunities to participate in the Derby Dash 5K, Community Bike Challenge, Virtual Bike Decorating Parade, Derby Days Bingo, Rock-a-thon Open Mic, Derby Do Gooder scholarship, and Virtual Art Show. 
                </Card.Text>
                <Button variant="primary"> View Details</Button>
              </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src= "https://www.redmond.gov/ImageRepository/Document?documentId=13870" />
            <span className="Parade"> Bike Decorating Parade</span>
              <Card.Body>
                <Card.Title><strong>Sunday at 11am</strong></Card.Title>
                <Card.Text>
                  Decorate your bike and join us for a virtual bike parade to help celebrate virtual Derby Days 2020! Bike decorating is a long-standing Derby Days tradition and is a fun way to show your individual style. Add streamers, ribbons, balloons and any other decorations that inspire your creativity. 
                </Card.Text>
                <Button variant="primary"> View Details</Button>
              </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src= "https://www.redmond.gov/ImageRepository/Document?documentID=9912" />
            <span className="Lights"> Redmond Lights</span>
              <Card.Body>
                <Card.Title><strong>December 5&6, at 7pm</strong></Card.Title>
                <Card.Text>
                  This progressive, three-part event starts at Redmond City Hall and takes you on a luminary walk along the Sammamish River Trail to Downtown Park and the Redmond Town Center. On Saturday evening, a Winter Wonderland awaits you at Redmond Town Center, with a carousel, live ice carver, and more performances.
                </Card.Text>
                <Button variant="primary"> View Details</Button>
              </Card.Body>
          </Card>

        </CardDeck>

        <div className="footer">
          <p>&copy; New Technologists 2020 - Team 13</p>
        </div>


      
       </div>
    );
  }
}

