import React from "react";
import { pages } from "../App";
import { createDecipher } from "crypto";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import { BsNewspaper } from "react-icons/bs";
import { LocalNewsDeck } from "../components/LocalNewsDeck";
import {BsCalendar} from "react-icons/bs";
import UniversalNavBar from "../components/UniversalNavBar";
import {UpcomingEventsDeck} from "../components/UpcomingEventsDeck";
import {ArticlesDeck} from "../components/ArticlesDeck";


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
        <ArticlesDeck/>
        <UpcomingEventsDeck/>
        <LocalNewsDeck/>

        <div className="footer">
          <p>&copy; New Technologists 2020 - Team 13</p>
        </div>
      </div>
    );
  }
}

