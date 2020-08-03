import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import { BsNewspaper } from "react-icons/bs";
import { LocalNewsCard } from "./LocalNewsCard";
import {BsCalendar} from "react-icons/bs";
import {UpcomingEventsCard} from "./UpcomingEventsCard";

export class UpcomingEventsDeck extends React.Component<{}>{
    render(){
        return(
            <div>
                <p className="p3"> 
                    Upcoming Events <BsCalendar />
                    <hr className="lineTitle"></hr>
                </p>
                <CardDeck className="UpcomingEventsDeck">
                    <UpcomingEventsCard image=" https://www.redmond.gov/ImageRepository/Document?documentId=13870" title="Sunday at 11am" caption= "It’s been an unusual time for voting. The COVID-19 pandemic has changed the rules of political participation — less contact, fewer personal appearances by most candidates..." 
                    topic="Bike decorating Parade"/>
                    <UpcomingEventsCard  image="https://www.redmond.gov/ImageRepository/Document?documentID=9912" title="Saturday at 7pm" caption= "The march was planned as a silent event to honor those killed by police brutality and institutionalized racism. Additionally, according to BLM, the silence was intended to help mitigate the risk of spreading the COVID-19 coronavirus..." 
                    topic="Redmond Lights"/>
                    <UpcomingEventsCard image="https://www.redmond.gov/ImageRepository/Document?documentId=13898" title="Tuesday at 10pm" caption= "The march was planned as a silent event to honor those killed by police brutality and institutionalized racism. Additionally, according to BLM, the silence was intended to help mitigate the risk of spreading the COVID-19 coronavirus..." 
                    topic="Derby Days"/>
                </CardDeck>
            </div>
        );
    }
}

export default UpcomingEventsDeck;