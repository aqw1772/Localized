import React from "react";
import { pages } from "../App";
import { createDecipher } from "crypto";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import { BsNewspaper } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import { LocalNewsDeck } from "../components/LocalNewsDeck";
import {BsCalendar} from "react-icons/bs";
import UniversalNavBar from "../components/UniversalNavBar";
import {UpcomingEventsDeck} from "../components/UpcomingEventsDeck";


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
        <UniversalNavBar changePage={this.props.changePage}/>
      <br></br>
        <p className="p"> 
          Latest articles for you based on your interests <BsNewspaper/>
          <hr></hr>
        </p>
    
        <Sidebar changePage={this.props.changePage} userInterests={"Implement redux here"}/> 

        <CardDeck className="card-deck">
          <Card>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Election_voting_20180128.jpg/1200px-Election_voting_20180128.jpg"/>
            <span className="Voting">Voting</span>
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
            <span className="Schools">Schools</span>
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
            <span className="Protests">Protests</span>
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

        
        <UpcomingEventsDeck/>
      

        <LocalNewsDeck/>

        <div className="footer">
          <p>&copy; New Technologists 2020 - Team 13</p>
        </div>
      </div>
    );
  }
}
